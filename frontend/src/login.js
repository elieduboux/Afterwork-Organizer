import { useState } from "react";

export default function Login() {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      fetch("http://localhost:8100/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.fieldErrors) {
            data.fieldErrors.forEach(fieldError => {
              if(fieldError.field === 'email'){
                setEmailError(fieldError.message);
              }

              if(fieldError.field === 'password'){
                setPasswordError(fieldError.message);
              }
            });
          } else {
            alert("Success !!");
          }
        })
        .catch((err) => err);
    }

    return (
    <div class="login-root">
      <div class="box-root flex-flex flex-direction--column">
        <div class="loginbackground box-background--white padding-top--64">
          <div class="loginbackground-gridContainer">
            <div class="box-root flex-flex">
              <div class="box-root">
              </div>
            </div>
            <div class="box-root flex-flex">
              <div class="box-root box-divider--light-all-2 animationLeftRight tans3s"></div>
            </div>
            <div class="box-root flex-flex">
              <div class="box-root box-background--blue800"></div>
            </div>
            <div class="box-root flex-flex">
              <div class="box-root box-background--blue animationLeftRight"></div>
            </div>
            <div class="box-root flex-flex">
              <div class="box-root box-background--gray100 animationLeftRight tans3s"></div>
            </div>
            <div class="box-root flex-flex">
              <div class="box-root box-background--cyan200 animationRightLeft tans4s"></div>
            </div>
            <div class="box-root flex-flex">
              <div class="box-root box-background--blue animationRightLeft"></div>
            </div>
            <div class="box-root flex-flex">
              <div class="box-root box-background--gray100 animationRightLeft tans4s"></div>
            </div>
            <div class="box-root flex-flex">
              <div class="box-root box-divider--light-all-2 animationRightLeft tans3s"></div>
            </div>
          </div>
        </div>
        <div class="box-root padding-top--24 flex-flex flex-direction--column">
          <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1>Afterwork Organiser</h1>
          </div>
          <div class="formbg-outer">
            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15">Sign in to your account</span>
                <form id="stripe-login" onSubmit={onSubmit}>
                  <div class="field padding-bottom--24">
                    <label for="email">Email</label>
                    <input type="email" name="email"/>
                    {
                      emailError ? <span style={{ color: 'red', fontSize: '12px'}}>{emailError}</span> : ''
                   }
                  </div>
                  <div class="field padding-bottom--24">
                    <div class="grid--50-50">
                      <label for="password">Password</label>
                    </div>
                    <input type="password" name="password">{passwordError}</input>
                   </div>
                  <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                    <label for="checkbox">
                      <input type="checkbox" name="checkbox"> Stay signed in for a week</input>
                    </label>
                  </div>
                  <div class="field padding-bottom--24">
                    <input type="submit" name="submit" value="Continue"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}