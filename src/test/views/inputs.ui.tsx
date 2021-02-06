import React, {useState} from 'react';
import ButtonSearchBar from '../../lib/components/partials/button-search-bar/button-search-bar.component';
import Input from '../../lib/components/partials/input/input.component';

const Inputs: React.FC = (): JSX.Element => {
  const [loginInfo, setLoginInfo] = useState<{email: string; password: string}>({email: '', password: ''});
  return (
    <main>
      <form className="form-container">
        <h2 style={{textAlign: 'center', marginBottom: '32px'}}>Inputs Testing</h2>
        <div className="login-row">
          <ButtonSearchBar
            id="searchItems"
            name="search_item"
            type="search"
            placeholder="Search 🍏"
            toolTip={true}
            toolTipHint="You can easily search for users as an admin"
          />
          <Input id="searchUser" name="search_user" type="search" placeholder="Search 🔦" />
          <Input
            id="email"
            autoComplete="off"
            autoCapitalize="off"
            info="Email should can be mixed like this: emmajerry2016-21_22-test.test@fake.fake"
            hint="wrong input, "
            name="email"
            regExp={/^s*[A-za-z]*$/}
            required={true}
            type="email"
            placeholder="Email"
            value={loginInfo.email}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setLoginInfo({...loginInfo, email: ev.target.value})}
          />

          <Input
            id="password"
            autoComplete="off"
            autoCapitalize="off"
            info="Pasword should be 10 letters long, should contain at leat 1 Capital letter,special characters and optional numbers"
            hint="wrong input, "
            name="password"
            regExp={/^s*[A-za-z]*$/}
            required={true}
            type="password"
            placeholder="Password"
            value={loginInfo.password}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
              setLoginInfo({...loginInfo, password: ev.target.value})
            }
          />

          <Input id="login" type="submit" name="login" value="LOGIN" />
        </div>
        <div className="register-row"></div>
      </form>
    </main>
  );
};

export default Inputs;
