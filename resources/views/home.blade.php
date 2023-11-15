<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network G157</title>
    <link rel="stylesheet" href="../public/css/style.css">
    <link rel="shortcut icon" href="img/picture/network-icon.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/css/iziToast.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js"></script>
</head>

<body>
    <div class="modal-contain-profile">
        <div class="modal-profile">
            <div class="content-modal-atas">
                <p>Edit Profile</p>
                <p class="closeProfile">X</p>
            </div>
            <div class="content-modal-bawah-profile">
                <img src="img/picture/{{ Session::get('image') }}" class="pp">
                <input type="file">
                <input type="text" placeholder="New username">
                <input type="text" placeholder="New password">
                <input type="submit" value="Save" class="btn-save-profile">
            </div>
        </div>
    </div>
    <div class="modal-contain-mac">
        <div class="modal-mac">
            <div class="content-modal-atas">
                <div class="judul-sama-refresh">
                    <p class="judul-toko-mac">KODETOKO - NAMATOKO</p>
                    <button class="btn winbox refresh-data-mac">Refresh</button>
                </div>
                <p class="closeMac">X</p>
            </div>
            <div class="content-modal-bawah-mac">
                <div class="content-modal-bawah-kiri-mac">
                    <div class="content-modal-bawah-kiri-mac-tambahmac">
                        <input type="text" placeholder="Add Mac-address" id="input-mac">
                        <input type="text" placeholder="Comment" id="comment">
                        <button class="btn submit-mac">Submit</button>
                    </div>
                    <div class="content-modal-bawah-kiri-mac-tambahmac">
                        <input type="text" value="Name Interface :" readonly>
                        <input type="text" value="NULL" readonly id="nama-wlan">
                    </div>
                    <div class="content-modal-bawah-kiri-mac-tambahmac">
                        <input type="text" value="Registration-Table :" readonly>
                        <input type="text" value="NULL" readonly id="registration-table">
                    </div>
                    <div class="content-modal-bawah-kiri-mac-tambahmac">
                        <input type="text" class="sm" value="Get Default-Authentication :" readonly>
                        <input type="text" class="kecil" value="NULL" readonly id="get-default-auth">
                    </div>
                    <div class="content-modal-bawah-kiri-mac-tambahmac">
                        <input type="text" class="sm" value="Set Default-Authentication :" readonly>
                        <button class="btn red default" id="set-true" data-default="yes">True</button>
                        <button class="btn green default" id="set-false" data-default="no">False</button>
                    </div>
                </div>
                <div class="content-modal-bawah-kanan-mac">
                    <table id="list-mac">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Mac-Adress</th>
                                <th>Comment</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-list-mac">
                            <tr>
                                <td></td>
                                <td style="text-align: right;">No</td>
                                <td>Data.</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <input type="hidden" value="{{ Session::get('id') }}" id="userId" style="color: black">
    <input type="hidden" value="{{ Session::get('akses') }}" id="cekAkses" style="color: black">
    <input type="hidden" value="{{ Session::get('is_timnet') }}" id="isTimNet" style="color: black">

    <img src="img/picture/wateroil.png" class="bg-saver" alt="bg-image">
    <div class="container-main">
        <div class="navbar">
            <div class="judul-main">
                <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.195312 2.808593 l -0.496094 0.480469 c -0.3984378 0.378906 -0.410156 1.011719 -0.03125 1.410156 c 0.382812 0.398438 1.015625 0.410156 1.414062 0.03125 l 0.5 -0.476562 c 3.085938 -2.957032 8.53125 -2.957032 11.617188 0 l 0.5 0.476562 c 0.398437 0.378906 1.03125 0.367188 1.414062 -0.03125 c 0.378906 -0.398437 0.367188 -1.03125 -0.03125 -1.410156 l -0.496094 -0.484375 c -1.957031 -1.871094 -4.578124 -2.804687 -7.195312 -2.804687 z m -0.03125 4.007812 c -1.570312 0.011719 -3.128906 0.628906 -4.207031 1.8125 l -0.5 0.550781 c -0.179688 0.195313 -0.277344 0.453125 -0.261719 0.71875 c 0.011719 0.265625 0.128906 0.515625 0.328125 0.695313 c 0.195313 0.179687 0.453125 0.273437 0.71875 0.257812 c 0.265625 -0.011718 0.515625 -0.128906 0.695313 -0.328125 l 0.496093 -0.546875 c 1.277344 -1.402344 4.160157 -1.496094 5.523438 0.003906 l 0.5 0.542969 c 0.175781 0.199219 0.425781 0.316407 0.691406 0.328125 c 0.265625 0.015625 0.523437 -0.078125 0.722656 -0.257812 c 0.195313 -0.179688 0.3125 -0.429688 0.324219 -0.695313 c 0.011719 -0.261719 -0.082031 -0.523437 -0.261719 -0.71875 l -0.5 -0.546875 c -1.121093 -1.234375 -2.703125 -1.828125 -4.269531 -1.816406 z m 0.03125 4 c -0.511719 0 -1.023438 0.195312 -1.414062 0.585938 c -0.78125 0.78125 -0.78125 2.046874 0 2.828124 s 2.046874 0.78125 2.828124 0 s 0.78125 -2.046874 0 -2.828124 c -0.390624 -0.390626 -0.902343 -0.585938 -1.414062 -0.585938 z m 0 0"
                            fill="#ffffff"></path>
                    </g>
                </svg>
                <h2>Network G157</h2>
            </div>
            <div class="menu">
                <span>Application</span>
                <div class="menu-content">
                    <ul>
                        <li>
                            <div class="app-list-ip" onclick="loadContent('./app/app-list-ip.php');">List IP</div>
                        </li>
                        <li>
                            <div>Check WDCP Y</div>
                        </li>
                        <li>
                            <div>Wlan DC</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu">Manage IP</div>
            <div class="menu">Dokumentation</div>
            <div class="menu">Add User</div>
            <div class="menu">
                <span>Settings</span>
                <div class="menu-content">
                    <ul>
                        <li>
                            <div class="show-modal-profile">Profile</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="logout">
                <svg width="40px" height="40px" viewBox="0 -0.5 25 25" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z"
                            fill="#ffffff"></path>
                    </g>
                </svg>
            </div>
        </div>

        <div class="content">
            <div class="kiri-content" id="kiri-content">
                <div class="atas-content">
                    <h2 class="judulapp">List IP</h2>
                    <input type="text" placeholder="Search.." class="caritoko" id="caritoko" tabindex="1">
                </div>
                <div class="tengah-content">
                    <div class="list-ip-screensaver">
                        <span class="text-screensaver1">Back End <span style="color:lightgreen">OK</span></span>
                        <span class="text-screensaver2">PHP Version <?= phpversion() ?><span style="color:lightgreen">
                                OK</span></span>
                        <span class="text-screensaver3">JavaScript <span style="color:lightgreen">OK</span></span>
                    </div>
                    <div class="list-ip">
                        <div class="judul-list-ip">
                            <div class="toko-copy">
                                <h4 id="kodetokonamatoko">KODE TOKO - NAMA TOKO</h4>
                                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" id="svg-copy">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
                                            fill="#ffffff"></path>
                                        <path
                                            d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"
                                            fill="#ffffff"></path>
                                    </g>
                                </svg>
                            </div>
                            <h4 id="edparea">NAMA EDP AREA</h4>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Gateway</th>
                                    <td id="ip_gateway">10.73.10.1</td>
                                    <td><button class="btn ping">PING</button></td>
                                    <td><button class="btn tracert">TRACERT</button></td>
                                    <td><button class="btn winbox" data-winbox="koneksi">WINBOX</button></td>
                                </tr>
                                <tr>
                                    <th>Station 1</th>
                                    <td id="ip_induk">10.73.10.2</td>
                                    <td><button class="btn ping">PING</button></td>
                                    <td><button class="btn tracert">TRACERT</button></td>
                                    <td><button class="btn vnc">VNC</button></td>
                                </tr>
                                <tr>
                                    <th>Station 2</th>
                                    <td id="ip_anak">10.73.10.3</td>
                                    <td><button class="btn ping">PING</button></td>
                                    <td><button class="btn tracert">TRACERT</button></td>
                                    <td><button class="btn vnc">VNC</button></td>
                                </tr>
                                <tr>
                                    <th>STB</th>
                                    <td id="ip_stb">10.73.10.18</td>
                                    <td><button class="btn ping">PING</button></td>
                                    <td><button class="btn tracert">TRACERT</button></td>
                                    <td><button class="btn ftp">FTP</button></td>
                                </tr>
                                <tr>
                                    <th>WDCP</th>
                                    <td id="ip_wdcp"></td>
                                    <td><button class="btn ping">PING</button></td>
                                    <td><button class="btn tracert">TRACERT</button></td>
                                    <td><button class="btn winbox" data-winbox="wdcp">WINBOX</button><button
                                            class="btn mac show-modal-mac" data-winbox="wdcp">MAC</button></td>
                                </tr>
                                <tr>
                                    <th>CCTV</th>
                                    <td id="ip_cctv">10.73.10.27</td>
                                    <td><button class="btn ping">PING</button></td>
                                    <td><button class="btn tracert">TRACERT</button></td>
                                    <td><button class="btn web">WEB</button></td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <div class="kanan-content">
                <div class="kanan-atas">
                    <div class="departemen">{{ Session::get('departemen') }}</div>
                    @if (session()->has('image'))
                        <img src="img/picture/{{ Session::get('image') }}" alt="photo-profile" class="pp">
                    @else
                        <img src="img/picture/default.png" alt="photo-profile" class="pp">
                    @endif
                    <h5 class="siapaini">
                        @if (Session::get('is_verify') == 1)
                            <?= strtoupper(Session::get('name')) ?><img src="img/picture/verified3.png"
                                class="verified-atas">
                            <?php elseif ($_SESSION['is_verify'] == 2) : ?>
                            <?= strtoupper($_SESSION['name']) ?><img src="img/picture/verified3.png"
                                class="verified-atas"><img src="img/picture/verified_red.png" class="verified-atas">
                            <?php else : ?>
                            <?= strtoupper($_SESSION['name']) ?>
                            <?php endif; ?>
                    </h5>
                    <?php if ($_SESSION['akses'] == 1) : ?>
                    <h6 class="role">Administrator</h6>
                    <?php elseif ($_SESSION['akses'] == 2) : ?>
                    <h6 class="role">Web Administrator</h6>
                    <?php else : ?>
                    <h6 class="role">Member</h6>
                    <?php endif; ?>
                </div>
                <div class="kanan-bawah">
                    <?php foreach ($ambilSemuaUser as $dataUser) : ?>
                    <?php if ($dataUser['name'] != $_SESSION['name']) : ?>
                    <div class="user-lain">
                        <div class="user-lain-nama">
                            <img src="img/picture/<?= $dataUser['image'] ?>" alt="photo-profile" class="pp-lain">
                            <div class="nama-sama-role">
                                <?php if ($dataUser['is_verify'] == 1) : ?>
                                <h5 class="baris-verified"><?= strtoupper($dataUser['name']) ?><img
                                        src="img/picture/verified3.png" class="verified-lain"></h5>
                                <?php elseif ($dataUser['is_verify'] == 2) : ?>
                                <h5 class="baris-verified"><?= strtoupper($dataUser['name']) ?><img
                                        src="img/picture/verified3.png" class="verified-lain"><img
                                        src="img/picture/verified_red.png" class="verified-lain"></h5>
                                <?php else : ?>
                                <h5 class="baris-verified"><?= strtoupper($dataUser['name']) ?></h5>
                                <?php endif; ?>
                                <?php if ($dataUser['akses'] == 1) : ?>
                                <h6 class="role">Administrator</h6>
                                <?php elseif ($dataUser['akses'] == 2) : ?>
                                <h6 class="role">Web Administrator</h6>
                                <?php else : ?>
                                <h6 class="role">Member</h6>
                                <?php endif; ?>
                            </div>
                        </div>
                        <div class="departemen-bawah"><?= $dataUser['departemen'] ?></div>
                    </div>
                    <?php endif; ?>
                    <?php endforeach; ?>


                    <!-- <script>
                        (function(d, s, id) {
                            if (d.getElementById(id)) {
                                if (window.__TOMORROW__) {
                                    window.__TOMORROW__.renderWidget();
                                }
                                return;
                            }
                            const fjs = d.getElementsByTagName(s)[0];
                            const js = d.createElement(s);
                            js.id = id;
                            js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

                            fjs.parentNode.insertBefore(js, fjs);
                        })(document, 'script', 'tomorrow-sdk');
                    </script>

                    <div class="tomorrow" data-location-id="056950" data-language="EN" data-unit-system="METRIC" data-skin="dark" data-widget-type="upcoming" style="padding-bottom:22px;position:relative;">
                        <a href="https://www.tomorrow.io/weather-api/" rel="nofollow noopener noreferrer" target="_blank" style="position: absolute; bottom: 0; transform: translateX(-50%); left: 50%;">
                            <img alt="Powered by the Tomorrow.io Weather API" src="https://weather-website-client.tomorrow.io/img/powered-by.svg" width="250" height="18" />
                        </a>
                    </div> -->


                </div>
            </div>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>

</html>
