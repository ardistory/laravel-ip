const cekAkses = document.getElementById('cekAkses');
const userId = document.getElementById('userId');
const isTimNet = document.getElementById('isTimNet');

const text_screensaver1 = document.querySelector('.text-screensaver1');
const text_screensaver2 = document.querySelector('.text-screensaver2');
const text_screensaver3 = document.querySelector('.text-screensaver3');

setTimeout(() => {
    text_screensaver1.style.display = 'block';
}, 500);
setTimeout(() => {
    text_screensaver2.style.display = 'block';
}, 1000);
setTimeout(() => {
    text_screensaver3.style.display = 'block';
}, 1500);

const logout = document.getElementById('logout');

logout.addEventListener('click', () => {
    iziToast.question({
        drag: false, // Izinkan atau larang pengguna menarik pemberitahuan
        overlay: true, // Izinkan atau larang overlay latar belakang
        timeout: false, // Setel timeout ke "false" agar pemberitahuan tetap ada sampai pengguna mengklik OK atau Cancel
        close: false, // Izinkan atau larang tombol close
        title: 'Warning!',
        message: 'Are you sure?',
        pauseOnHover: false,
        position: 'center', // Posisi pemberitahuan di tengah
        buttons: [
            ['<button><b>OK</b></button>', function (instance, toast) {
                // Aksi yang dilakukan jika pengguna mengklik tombol "OK"
                // Contoh: Lakukan permintaan AJAX atau aksi yang sesuai
                const xhr = new XMLHttpRequest();
                xhr.open('GET', '../server/logout.php', true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        iziToast.success({
                            title: 'Success!',
                            message: xhr.responseText,
                            pauseOnHover: false,
                            position: 'center',
                            timeout: 1000,
                            overlay: true,
                            close: false,
                            onClosing: function () {
                                document.location.reload();
                            }
                        });
                    }
                };
                xhr.send();
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }, true],// Atur tombol "OK" sebagai tombol default
            ['<button>Cancel</button>', function (instance, toast) {
                // Aksi yang dilakukan jika pengguna mengklik tombol "Cancel"
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }
            ]
        ]
    });
});

const app_list_ip = document.querySelector('.app-list-ip');
app_list_ip.addEventListener('click', () => {
    document.location.href = './';
});


const caritoko = document.getElementById('caritoko');
const div_list_ip = document.querySelector('.list-ip');
const div_list_ip_screensaver = document.querySelector('.list-ip-screensaver');

caritoko.addEventListener('keyup', (e) => {
    if (e.target.value.length >= 4) {
        const kodetoko = caritoko.value;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `../server/cari-toko.php?kodetoko=${kodetoko}`, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const hasil = JSON.parse(xhr.responseText);

                const { kode_toko } = hasil[0];
                const { nama_toko } = hasil[0];
                const { ip_gateway } = hasil[0];
                const { ip_induk } = hasil[0];
                const { ip_anak } = hasil[0];
                const { ip_stb } = hasil[0];
                const { ip_wdcp } = hasil[0];
                const { edparea } = hasil[0];

                olahDataIpCctv = ip_wdcp.split(".");
                olahDataIpCctv2 = parseInt(olahDataIpCctv[3]);

                const ip_cctv = `${olahDataIpCctv[0]}.${olahDataIpCctv[1]}.${olahDataIpCctv[2]}.${olahDataIpCctv2 + 7}`;

                const kode_toko_nama_toko_ardistory = document.getElementById('kodetokonamatoko');
                const ip_gateway_ardistory = document.getElementById('ip_gateway');
                const ip_induk_ardistory = document.getElementById('ip_induk');
                const ip_anak_ardistory = document.getElementById('ip_anak');
                const ip_stb_ardistory = document.getElementById('ip_stb');
                const ip_wdcp_ardistory = document.getElementById('ip_wdcp');
                const ip_cctv_ardistory = document.getElementById('ip_cctv');
                const edparea_ardistory = document.getElementById('edparea');

                kode_toko_nama_toko_ardistory.innerHTML = `${kode_toko} - ${nama_toko}`;
                ip_gateway_ardistory.innerHTML = `${ip_gateway}`;
                ip_induk_ardistory.innerHTML = `${ip_induk}`;
                ip_anak_ardistory.innerHTML = `${ip_anak}`;
                ip_stb_ardistory.innerHTML = `${ip_stb}`;
                ip_wdcp_ardistory.innerHTML = `${ip_wdcp}`;
                ip_cctv_ardistory.innerHTML = `${ip_cctv}`;
                edparea_ardistory.innerHTML = `${edparea}`;

                div_list_ip.style.display = 'flex';
                div_list_ip_screensaver.style.display = 'none';


                const xhro = new XMLHttpRequest();
                xhro.open('GET', `../server/ping-monitor.php?ip_gateway=${ip_gateway}&ip_induk=${ip_induk}&ip_anak=${ip_anak}&ip_stb=${ip_stb}&ip_wdcp=${ip_wdcp}&ip_cctv=${ip_cctv}`, true);
                xhro.onload = async function () {
                    if (xhro.status === 200) {
                        const hasil = JSON.parse(xhro.responseText);

                        if (hasil[0].ping_gateway != false) {
                            ip_gateway_ardistory.style.color = 'lightgreen';
                        } else {
                            ip_gateway_ardistory.style.color = '#ff0026'
                        }

                        if (hasil[0].ping_induk != false) {
                            ip_induk_ardistory.style.color = 'lightgreen';
                        } else {
                            ip_induk_ardistory.style.color = '#ff0026'
                        }

                        if (hasil[0].ping_anak != false) {
                            ip_anak_ardistory.style.color = 'lightgreen';
                        } else {
                            ip_anak_ardistory.style.color = '#ff0026'
                        }

                        if (hasil[0].ping_stb != false) {
                            ip_stb_ardistory.style.color = 'lightgreen';
                        } else {
                            ip_stb_ardistory.style.color = '#ff0026'
                        }

                        if (hasil[0].ping_wdcp != false) {
                            ip_wdcp_ardistory.style.color = 'lightgreen';
                        } else {
                            ip_wdcp_ardistory.style.color = '#ff0026'
                        }

                        if (hasil[0].ping_cctv != false) {
                            ip_cctv_ardistory.style.color = 'lightgreen';
                        } else {
                            ip_cctv_ardistory.style.color = '#ff0026'
                        }

                        iziToast.info({
                            message: `showing the PING results!`,
                            pauseOnHover: false,
                            position: 'topRight',
                            close: false
                        });
                    }
                }
                xhro.send();

                iziToast.success({
                    title: 'Load :',
                    message: `${kode_toko} - ${nama_toko}`,
                    position: 'topRight',
                    pauseOnHover: false,
                    maxWidth: '500',
                    close: false
                });

            } else {
                iziToast.error({
                    title: 'Error :',
                    message: xhr.responseText,
                    position: 'topRight',
                    pauseOnHover: false,
                    maxWidth: '500'
                });
            }
        }
        xhr.send();
        caritoko.value = '';
    }
});

const closeProfile = document.querySelector('.closeProfile');
const modalProfile = document.querySelectorAll('.modal-contain-profile');
const showModalProfile = document.querySelector('.show-modal-profile');
const btn_save = document.querySelector('.btn-save-profile');

closeProfile.addEventListener('click', (e) => {
    modalProfile.forEach((value) => {
        value.style.display = 'none';

        let formUsername = e.target.parentElement.parentElement.children[1].lastElementChild.previousElementSibling.previousElementSibling;
        let formPassword = e.target.parentElement.parentElement.children[1].lastElementChild.previousElementSibling;

        formUsername.value = '';
        formPassword.value = '';
    });
});

showModalProfile.addEventListener('click', () => {
    modalProfile.forEach((value) => {
        value.style.display = 'flex';
    });
});

btn_save.addEventListener('click', (e) => {
    e.preventDefault();

    const file = e.target.previousElementSibling.previousElementSibling.previousElementSibling.files[0];
    const username = e.target.previousElementSibling.previousElementSibling;
    const password = e.target.previousElementSibling;

    if (username.value != '' && password.value != '') {

        const formData = new FormData();
        formData.append('files', file);
        formData.append('id', userId.value);
        formData.append('username_baru', username.value);
        formData.append('password_baru', password.value);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', `../server/setting-profile.php`, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                iziToast.success({
                    title: 'Done!',
                    message: xhr.responseText,
                    position: 'topRight',
                    timeout: 1500,
                    overlay: false,
                    pauseOnHover: false,
                    onClosing: function () {
                        document.location.reload();
                    }
                });

                modalProfile.forEach((value) => {
                    value.style.display = 'none';
                });

                username.value = '';
                password.value = '';
            } else {
                iziToast.error({
                    title: "Error 404!",
                    message: xhr.responseText,
                    pauseOnHover: false,
                    position: "topRight"
                });

                modalProfile.forEach((value) => {
                    value.style.display = 'none';
                });

                username.value = '';
                password.value = '';
            }
        }
        xhr.send(formData);
    } else {
        iziToast.error({
            title: "Error!",
            message: "contains prohibited characters!",
            pauseOnHover: false,
            position: "topRight"
        });
    }
});


const copyToko = document.getElementById('svg-copy');

copyToko.addEventListener('click', (e) => {
    const kodeTokoCopy = e.target.previousElementSibling.innerText;

    navigator.clipboard.writeText(kodeTokoCopy);

    iziToast.warning({
        timeout: 2000,
        pauseOnHover: false,
        title: "Copied",
        message: kodeTokoCopy,
        position: "topCenter",
        close: false,
        transitionIn: 'bounceInLeft',
        transitionOut: 'flipOutX'
    });
});

if (isTimNet.value == 'asynchronus' && userId.value == '1') {

    const ping = document.querySelectorAll('.ping');

    ping.forEach((value) => {
        value.addEventListener('click', (e) => {
            const ipAddress = e.target.parentElement.previousElementSibling.innerHTML;

            const xhr = new XMLHttpRequest();
            xhr.open('GET', `../server/ping.php?ip_address=${ipAddress}`, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    console.log(`Ping ${ipAddress}`);
                }
            }
            xhr.send();
        });
    });

    const tracert = document.querySelectorAll('.tracert');

    tracert.forEach((value) => {
        value.addEventListener('click', (e) => {
            const ipAddress = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML;

            const xhr = new XMLHttpRequest();
            xhr.open('GET', `../server/tracert.php?ip_address=${ipAddress}`, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    console.log(`Tracert ${ipAddress}`);
                }
            }
            xhr.send();
        });
    });

    const vnc = document.querySelectorAll('.vnc');

    vnc.forEach((value) => {
        value.addEventListener('click', (e) => {
            if (cekAkses.value == 1 || cekAkses.value == 2) {
                const ipAddress = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
                console.log(ipAddress);
                const xhr = new XMLHttpRequest();
                xhr.open('GET', `../server/vnc.php?ip_address=${ipAddress}`, true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        console.log(`Vnc ${ipAddress}`);
                    } else {
                        iziToast.error({
                            title: "Error 404!",
                            message: xhr.responseText,
                            pauseOnHover: false,
                            position: "topRight"
                        });
                    }
                }
                xhr.send();
            } else {
                iziToast.warning({
                    title: "Warning!",
                    message: "Access denied!",
                    pauseOnHover: false,
                    position: "topRight"
                });
            }

        });
    });

    const ftp = document.querySelectorAll('.ftp');

    ftp.forEach((value) => {
        value.addEventListener('click', (e) => {
            if (cekAkses.value == 1 || cekAkses.value == 2 || cekAkses.value == 0) {
                const ipAddress = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
                console.log(ipAddress);
                const xhr = new XMLHttpRequest();
                xhr.open('GET', `../server/ftp.php?ip_address=${ipAddress}`, true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        console.log(`Ftp ${ipAddress}`);
                    }
                }
                xhr.send();
            } else {
                iziToast.warning({
                    title: "Warning!",
                    message: "Access denied!",
                    pauseOnHover: false,
                    position: "topRight"
                });
            }
        });
    });

    const winbox = document.querySelectorAll('.winbox');

    winbox.forEach((value) => {
        value.addEventListener('click', (e) => {
            if (cekAkses.value == 1 || cekAkses.value == 2) {
                if (isTimNet.value == 'asynchronus') {
                    const statusRouter = e.target.dataset.winbox;

                    if (statusRouter === 'koneksi' || statusRouter === 'wdcp') {
                        const ipAddress = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

                        const xhr = new XMLHttpRequest();
                        xhr.open('GET', `../server/winbox.php?ip_address=${ipAddress}&status_router=${statusRouter}`, true);
                        xhr.onload = function () {
                            if (xhr.status === 200) {
                                console.log(`Winbox ${ipAddress}`);
                            } else {
                                iziToast.error({
                                    title: "Error 404!",
                                    message: xhr.responseText,
                                    pauseOnHover: false,
                                    position: "topRight"
                                });
                            }
                        }
                        xhr.send();
                    }
                } else {
                    iziToast.warning({
                        title: "Warning!",
                        message: "Access denied!",
                        pauseOnHover: false,
                        position: "topRight"
                    });
                }
            } else {
                iziToast.warning({
                    title: "Warning!",
                    message: "Access denied!",
                    pauseOnHover: false,
                    position: "topRight"
                });
            }
        });
    });

    const web = document.querySelectorAll('.web');

    web.forEach((value) => {
        value.addEventListener('click', (e) => {
            const ipAddress = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

            open(`http://${ipAddress}`);

            console.log(`Web ${ipAddress}`);
        });
    });


    const showModalMac = document.querySelector('.show-modal-mac');
    const closeMac = document.querySelector('.closeMac');
    const modalMac = document.querySelectorAll('.modal-contain-mac');
    const btn_submit = document.querySelector('.submit-mac');

    showModalMac.addEventListener('click', (e) => {
        if (isTimNet.value == 'asynchronus') {
            const ip_Wdcp_mac = e.target.previousElementSibling.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            const refresh_data_mac = document.querySelector('.refresh-data-mac');

            modalMac.forEach((value) => {
                value.style.display = 'flex';
            });

            function ambilDataUlang() {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', `../server/ambil-data-wdcp.php?ip_wdcp_mac=${ip_Wdcp_mac}`, true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        const hasilCek = JSON.parse(xhr.responseText);
                        const dataUtama = hasilCek[0];

                        // DATA KIRI
                        const judul_tambah_mac = document.querySelector('.judul-toko-mac');
                        const kodeTokoNamaTokonya = document.getElementById('kodetokonamatoko').innerText;

                        const nama_wlan = document.getElementById('nama-wlan');
                        const get_default_auth = document.getElementById('get-default-auth');
                        const registration_table = document.getElementById('registration-table');

                        dataUtama.dataKiri.regist_mac.forEach((valueA) => {
                            registration_table.value = `|${valueA}|`;
                        });

                        nama_wlan.value = dataUtama.dataKiri.nama_interface;
                        get_default_auth.value = dataUtama.dataKiri.default_authentication;
                        judul_tambah_mac.innerHTML = kodeTokoNamaTokonya;

                        // DATA KANAN
                        const tbody_list_mac = document.getElementById('tbody-list-mac');

                        let wadahTr = '';
                        let nomorUrut = 1;
                        dataUtama.dataKanan.access_list.forEach((valueB) => {
                            wadahTr += `
                            <tr>
                            <td>${nomorUrut}</td>
                            <td>${valueB.macAccessList}</td>
                            <td>${valueB.commentAccessList}</td>
                            <td><button class="btn hapus-mac" data-id="${valueB.idMacAccessList}">Delete</button>
                            </td>
                            </tr>
                            `;
                            nomorUrut += 1;
                        });
                        tbody_list_mac.innerHTML = wadahTr;

                        const button_hapus_mac = document.querySelectorAll('.hapus-mac');
                        button_hapus_mac.forEach((klik) => {
                            klik.addEventListener('click', (e) => {
                                const idMacAddress = e.target.dataset.id;

                                iziToast.question({
                                    close: false,
                                    pauseOnHover: false,
                                    overlay: true,
                                    position: 'center',
                                    timeout: false,
                                    title: "Hey",
                                    message: "Are you sure?",
                                    buttons: [
                                        ["<button><b>Yes</b></button>", function (instance, toast) {
                                            const formData = new FormData();
                                            formData.append('id', idMacAddress);
                                            formData.append('ip_wdcp', ip_Wdcp_mac);

                                            const xhr = new XMLHttpRequest();
                                            xhr.open('POST', '../server/hapus-mac.php', true);
                                            xhr.onload = function () {
                                                if (xhr.status === 200) {
                                                    iziToast.success({
                                                        pauseOnHover: false,
                                                        position: 'topRight',
                                                        title: "Success!",
                                                        message: xhr.responseText,
                                                        close: false
                                                    });
                                                } else {
                                                    iziToast.error({
                                                        pauseOnHover: false,
                                                        position: 'topRight',
                                                        title: "Error 404!",
                                                        message: xhr.responseText,
                                                        close: false
                                                    });
                                                }
                                            }
                                            xhr.send(formData);

                                            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                                        }, true],
                                        ["<button><b>No</b></button>", function (instance, toast) {
                                            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                                        }]
                                    ]
                                });
                            });
                        });
                    }
                }
                xhr.send();
            }

            ambilDataUlang();

            refresh_data_mac.addEventListener('click', () => {
                ambilDataUlang();
                iziToast.info({
                    message: "Refresh",
                    position: "topRight",
                    pauseOnHover: false,
                    close: false
                });
            });
        } else {
            iziToast.warning({
                title: "Warning!",
                message: "Access denied!",
                position: "topRight",
                pauseOnHover: false
            });
        }
    });

    const submit_mac = document.querySelector('.submit-mac');
    submit_mac.addEventListener('click', (e) => {

        let macAddressnya = e.target.previousElementSibling.previousElementSibling;
        let commentNya = e.target.previousElementSibling;
        const ip_Wdcp_mac = e.target.ownerDocument.body.children[6].children[1].children[0].children[1].children[1].children[1].children[0].children[4].children[1].innerText;

        if (macAddressnya != '') {
            const formDataMac = new FormData();
            formDataMac.append('mac-address', macAddressnya.value);
            formDataMac.append('comment', commentNya.value);
            formDataMac.append('ip_wdcp_mac', ip_Wdcp_mac);

            const xhr = new XMLHttpRequest();
            xhr.open('POST', `../server/tambah-mac.php`, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    iziToast.success({
                        title: "Success!",
                        message: xhr.responseText,
                        pauseOnHover: false,
                        position: "topRight"
                    });
                } else {
                    iziToast.error({
                        title: "Error 404!",
                        message: xhr.responseText,
                        pauseOnHover: false,
                        position: "topRight",
                        close: false
                    });
                }
            }
            xhr.send(formDataMac);

        } else {
            iziToast.error({
                title: "Error 404!",
                message: "mac-address prohibited empty!",
                pauseOnHover: false,
                position: "topRight"
            });
        }

        macAddressnya.value = '';
        commentNya.value = '';
    });

    closeMac.addEventListener('click', () => {
        modalMac.forEach((value) => {
            value.style.display = 'none';
        });
    });

    const set_default = document.querySelectorAll('.default');
    set_default.forEach((value) => {
        value.addEventListener('click', (e) => {
            const ip_wdcp = e.target.ownerDocument.body.children[6].children[1].children[0].children[1].children[1].children[1].children[0].children[4].children[1].innerText;
            const defaultNya = e.target.dataset.default;

            const formDataIP = new FormData();
            formDataIP.append('ip_wdcp', ip_wdcp);
            formDataIP.append('defaultnya', defaultNya);

            const xhr = new XMLHttpRequest();
            xhr.open('POST', `../server/set-default.php`, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    iziToast.success({
                        title: "Success!",
                        message: xhr.responseText,
                        pauseOnHover: false,
                        position: "topRight"
                    });

                    const xhrg = new XMLHttpRequest();
                    xhrg.open('GET', `../server/ambil-data-wdcp.php?ip_wdcp_mac=${ip_wdcp}`, true);
                    xhrg.onload = function () {
                        if (xhrg.status === 200) {
                            const hasilCek = JSON.parse(xhrg.responseText);

                            const judul_tambah_mac = document.querySelector('.judul-toko-mac');
                            const kodeTokoNamaTokonya = document.getElementById('kodetokonamatoko').innerText;

                            const nama_wlan = document.getElementById('nama-wlan');
                            const get_default_auth = document.getElementById('get-default-auth');
                            const registration_table = document.getElementById('registration-table');

                            const nama_interface = hasilCek[0].nama_interface;
                            const default_authentication = hasilCek[0].default_authentication;
                            const regist_mac = hasilCek[0].regist_mac;

                            nama_wlan.value = nama_interface;
                            get_default_auth.value = default_authentication;
                            registration_table.value = regist_mac;
                            judul_tambah_mac.innerHTML = kodeTokoNamaTokonya;
                        }
                    }
                    xhrg.send();
                } else {
                    iziToast.error({
                        title: "Error 404!",
                        message: xhr.responseText,
                        pauseOnHover: false,
                        position: "topRight",
                        close: false
                    });
                }
            }
            xhr.send(formDataIP);
        });
    });



}



