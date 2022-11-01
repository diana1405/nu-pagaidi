class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

<ul>
    <li><a id="img" href="index.html"><img src="images/logo.png" width="100" height="100"></a></li>
    <li><p class="text">Nu, pagaidi!</p></li>
    <li><a href="profile.html">My profile</a></li>
    <li><a href="login.html">Login</a></li>
    <li><a href="contacts.html">About</a></li>
    <li><a href="rules.html">Rules</a></li>
    <li class="lang"><a href="#">RU</a></li>
    <li class="lang"><a href="#">EN</a></li>
    <li class="lang"><a href="#">LV</a></li>
</ul>

`;
}
}

customElements.define("menu-panel", Navbar);