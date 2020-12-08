<template>
	<div id="wrapper">
		<!-- 主体 -->
		<div class="main-content">
			<!-- 输入表单验证 -->
			<div class="content">
				<!-- 二维码 -->
				<div id="custom_display_2">
					<a class="ercode" id="qrcode-trigger" href="javascript:void(0)">二维码</a>
				</div>
				<!-- Logo -->
				<div class="lgnheader">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
						<rect class="imgItem" width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect>
						<rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
						<rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
						<rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect>
						<rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect>
						<rect x="20.6" y="15" width="9.8" height="9.8" rx="4.4" ry="4.4" style="fill:#FFFFFF"></rect>
						<rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect>
						<rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect>
						<rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect>
						<rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect>
					</svg>
					<h4 class="header_tit_txt" id="login-title">小米帐号登录</h4>
					<div class="site_info"></div>
				</div>

				<!-- 输入框 -->
				<div class="tabs_con">
					<div id="loginbox">
						<input class="item_account" autocomplete="off" type="text" name="user" id="username"
							placeholder="邮箱/手机号码/小米ID">
						<input class="item_account" type="password" placeholder="密码" autocomplete="off" id="pwd" name="password">
						<button>登陆</button>

						<div class="other_panel clearfix">
							<span class="sms_link">
								<a href="javascript:;" class="meassg" id="ChangeLoginType">手机短信登录/注册</a>
							</span>
							<div class="reverse">
								<div class="reg_forget_links">
									<a class="outer-link" href="">立即注册</a>
									<span>|</span>
									<a class="outer-link" href="">忘记密码？</a>
								</div>

								<!-- <div class="sms-unavaliable-links">
									<a target="_blank" href="">收不到验证码？</a>
								</div> -->
							</div>

							<!-- 其他登录方式 s -->
							<div style="display: block;" class="other_login_type">
								<fieldset class="oth_type_tit">
									<legend align="center" class="oth_type_txt">其他方式登录</legend>
								</fieldset>
								<div id="sns-login-links" class="oth_type_links">
									<a class="sns-qq" data-type="qq" href="" title="QQ登录" target="_blank">
										<i class="btn_sns_icontype"></i>
									</a>
									<a class="btn_weibo" data-type="weibo" href="" title="微博登录" target="_blank">
										<i class="weibo"></i>
									</a>
									<a class="alipay" data-type="alipay" href="" title="支付宝登录" target="_blank">
										<i class="default_alipay"></i>
									</a>
									<a class="icon_type btn_weixin sns-login-link" data-type="weixin" href="" title="微信登录"
										target="_blank">
										<i class="btn_sns_icontype icon_default_weixin"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	#wrapper {
		background-color: #F5F5F5;

		.main-content {
			background-color: #fff;
			max-width: 854px;
			margin: 0 auto 20px;
			position: relative;
			min-height: 620px;

			// 父元素
			.content {

				// position: relative;
				// 二维码
				#custom_display_2 {
					width: 80px;
					height: 80px;
					position: absolute;
					right: 0;
				}

				// logo 
				.lgnheader {
					width: 100%;
					height: 130px;

					svg {
						width: 48px;
						height: 48px;
						margin: 20px calc(50% - 48px) 0;
					}

					.header_tit_txt {
						font-size: 22px;
						font-weight: normal;
						margin-left: 340px;
						margin-top: 10px;
						margin-right: 5px;
					}
				}

				.tabs_con {
					height: 450px;

					#loginbox {
						width: 358px;
						height: 385px;
						// background-color: green;
						margin: 0 auto 5px;

						input {
							height: 50px;
							width: 330px;
							outline: none;
							margin-bottom: 10px;
							padding-left: 20px;
						}

						button {
							margin: 20px 0;
							height: 50px;
							width: 358px;
							background-color: #FF6700;
							outline: none;
							border: 1px solid #D9D9D9;
							line-height: 50px;
							color: #fff;
						}
						// 手机短信登录/注册
						.other_panel {
							margin-top: -5px;
							width: 358px;
							height: 188px;
							// 忘记密码
							.sms_link {
								a {
								text-decoration: none;
								outline: 0 none;
								appearance: none;
								-webkit-tap-highlight-color: transparent;
								width: 100%;
								display: block;
								text-align: center;
								font-size: 14px;
								cursor: pointer;
								background: #fff;
								color: #ff6700;
								border: 0 none;
								height: auto;
								line-height: normal;
								&a:hover {
									color:  #ff6700;
								}
							}
							}

							.reverse {
								color: #757575;

								.reg_forget_links {
									text-align: center;
									color: #e0e0e0;
									padding-top: 30px;
									a {
										text-align: center;
									text-decoration: none;
									outline: 0 none;
									border: 0 none;
									appearance: none;
									-webkit-tap-highlight-color: transparent;
									color: #757575;
									font-size: 14px;
									}
									
								}
							}
						}
					}
				}
			}
		}
	}
</style>