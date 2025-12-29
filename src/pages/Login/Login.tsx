import React, { useState } from "react";
import { cx } from "@emotion/css";
import PersonIcon from "@mui/icons-material/Person";
import { styles } from "./LoginStyles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate("/dashboard");
  };
  return (
    <div className={cx(styles.root)}>
      <div className={cx(styles.container)}>
        <div style={{ textAlign: "center" }}>
          <div className={cx(styles.iconContainer)}>
            <span className={cx(styles.loginTitle)}>Finances Tracker</span>
          </div>
          <h1 className={cx(styles.title)}>Welcome</h1>
          <h2 className={cx(styles.subtitle)}>
            Insert your credentials to access your account
          </h2>
        </div>
        <form className={cx(styles.formGroup)} onSubmit={handleSubmit}>
          <label className={styles.labelWrapper}>
            <p className={cx(styles.labelTitle)}>name or user</p>
            <div className={cx(styles.inputWrapper)}>
              <div className={cx(styles.inputIconLeft)}>
                <PersonIcon />
              </div>
              <input
                className={cx(styles.inputField)}
                placeholder="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>
          <label className={styles.labelWrapper}>
            <p className={cx(styles.labelTitle)}>Password</p>
            <div className={cx(styles.inputWrapper)}>
              <div className={cx(styles.inputIconLeft)}>
                <PersonIcon />
              </div>
              <input
                className={cx(styles.inputField)}
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>
          <div className={cx(styles.bottomContainer)}>
            <button className={cx(styles.button)} type="submit">
              <span>Log in</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
