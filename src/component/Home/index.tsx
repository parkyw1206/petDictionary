import React, { useState } from "react";
import "./index.scss";

const Home: React.FC = () => {
    const [searchKeyword, useSearchKeyword] = useState('');

    return (
    <div className="home">
        <input type={'text'} onChange={(e) => useSearchKeyword(e.target.value)}/>
    </div>
  );
};

export default Home;
