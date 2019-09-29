
import React from 'react';




export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

render() {
    return (

  <div className="container col-2">

       <div id="cardSeg" className="col-12 ">
       
            
            <div id="log in" className="row justify-content-md-center">
              <h2 className="Log-in">Log in</h2>
            </div>

            <div id="" className="row justify-content-md-center ">

              <ul className="list-inline  text-secondary">
                <li className="list-inline-item">

                  <img src="/img/facebook.png"
                   srcset="/img/facebook@2x.png 2x,
                           /img/facebook@3x.png 3x"
                   className="REDES" alt="facebook"/>

                </li>
                <li className="list-inline-item">
                  <img src="/img/twitter.png"
                    srcset="/img/twitter@2x.png 2x,
                            /img/twitter@3x.png 3x"
                  className="REDES" alt="twitter"/>
                </li>
                <li className="list-inline-item">
                 <img src="/img/google-plus.png"
                    srcset="/img/google-plus@2x.png 2x,
                            /img/google-plus@3x.png 3x"
                  className="REDES" alt="google-plus"/>
                </li>
              </ul>
           </div>
      
       </div>

      <div className="row justify-content-md-center">
        <div className="carta">   
          <form  className="" id="contactForm" novalidate="novalidate">
               <h2 className="Comencemos-ahora ">¡Comencemos ahora!</h2>
              
              <div className="control-group">
                <div className="form-group floating-label-form-group controls col-md-12">
                    
                    <div className="row">
                    <img src="/img/email-ico.jpg"
                        srcset="/img/email-ico@2x.jpg 2x, /img/email-ico@3x.jpg 3x"
                        className="EMAIL-ICO" alt="correo"/>

                      <input className="form-control col-md-8" id="name" type="text" placeholder="Email" required="required"/>
                </div>
               </div> 
              </div>

              <div className="control-group">
                <div className="form-group floating-label-form-group controls col-md-12">
                  <div className="row">

                  <img src="/img/contrase-a.jpg"
                     srcset="/img/contrase-a@2x.jpg 2x,/img/contrase-a@3x.jpg 3x"
                   className="CONTRASEA" alt="candado"/>

                    <input className="form-control col-md-8 " id="password" type="password" placeholder="Contraseña" required="required" />
                
                  
                  </div>
                </div>
              </div>
              
             <div className="form-group d-flex justify-content-center">
               <button className="btn btn-primary ">ENTRAR</button>
            </div>
          </form>
        </div>
    </div>
    <div >
    <img  className="LOGO-VERSION-BLANCO-PARA-LOGIN justify-content-md-center" src="/img/logo-version-blanco-para-login.png"
     srcset="/img/logo-version-blanco-para-login@2x.png 2x,
             /img/logo-version-blanco-para-login@3x.png 3x" alt="logo-version-blanco-para-login"/>

    </div>

    </div>

        );
    }
}
