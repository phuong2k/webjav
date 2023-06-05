import React from 'react';
import './style.css'

function Navbar() {
  return (
    <div class="navbar">
			<ul>
				<li><a href="https://isamigiken.gattscom.com/">ホーム</a></li>
				<li><a href="https://isamigiken.gattscom.com/renovation">施工事例</a></li>
				<li><a href="https://isamigiken.gattscom.com/simulation">料金シミュレーション</a></li>
				<li><a href="https://isamigiken.gattscom.com/about">会社概要</a></li>
				<li><a href="https://isamigiken.gattscom.com/recruit">採用情報</a></li>
			</ul>
			<div class="contact__area">
				<a class="mail" href="https://isamigiken.gattscom.com/contact">
					<img src="https://isamigiken.gattscom.com/./image/common/header-mail.png" alt=""/>
					<p>お問い合わせはこちら</p>
				</a>
			</div>
		</div>
  );
}

export default Navbar;