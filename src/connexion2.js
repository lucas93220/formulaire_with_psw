var _this = this;

document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    const envoi = {
        admin_login: "Lucas",
        admin_psw: 5555

    };

    console.log(e.target);
    /* class js */
    class Admin {
        /* Constructeur*/
        constructor(username, pass) {
            this.username = document.getElementsByName("login")[0];
            this.pass = document.getElementsByName("mdp")[0];
        }

        /* Getter*/
        get_out() {
            return `${this.username} : ${this.pass}`;
        }

        /* Setter */
        set_out() {

            if (this.username.value == envoi.admin_login && this.pass.value == envoi.admin_psw) {
                alert("Connecté");
                console.log(this.username.value);
            } else {
                alert("Erreur");
                console.log(this.username);
            }
        }
    }

    const new_connect = new Admin(_this.username, _this.pass);

    let btn = document.querySelector("#btn").addEventListener("click", e => {
        e.preventDefault();
        new_connect.get_out();
        new_connect.set_out();
        //console.log(envoi)
    });
});