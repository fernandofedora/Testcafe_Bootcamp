import {Selector} from 'testcafe';

    class Page{
        constructor (){
            this.signIn_link = Selector('a').withText('Sign in');
            this.email_input = Selector ('#email_create');
            this.createAccout_btn = Selector('#SubmitCreate');
            this.firsname_input = Selector ('#customer_firstname');
            this.lastname_input = Selector ('#customer_lastname');
            this.email_form = Selector ('#email');
            this.password_input = Selector ('#passwd');
            this.firstname_Address  = Selector ('#firstname');
            this.lastname_Address  = Selector ('#lastname');
            this.address = Selector ('#address1');




        }
    }

    export default new Page ();