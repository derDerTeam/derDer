<template>
	<!-- 输入表单验证 -->
	<div class="content">
		<!-- 二维码 -->
		<div id="custom_display_2">
			<a class="qrCode" href="#" @click="changes_login_qrcode"></a>
		</div>
		<!-- <button v-if='qrCode'>asdasd</button> -->
		<div class="tablesArea">
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
					<input v-if="login_regise_sms" class="item_account" autocomplete="off" type="text" name="user" id="username"
						placeholder="邮箱/手机号码/小米ID">
					<div v-if="!login_regise_sms" class="phone_login_name">
						<p class="phone_start_box">
							<span class="phone_start">+86</span>
						</p>
						<input type="text" placeholder="手机号码">
					</div>

					<input v-if="login_regise_sms" type="password" class="item_account" placeholder="密码" autocomplete="off"
						id="pwd" name="password">
					<div v-if="!login_regise_sms" class="phone_login_msmCode">
						<input type="text" class="phone_login_sms" placeholder="短信验证码">
						<div class="code_panel">
							<a class="send_ticket" href="javascript:;">获取验证码</a>
						</div>
					</div>
					<button>登陆</button>

					<div class="other_panel clearfix">
						<span class="sms_link">
							<a href="javascript:;" class="meassg" @click="changes_user_status" id="ChangeLoginType">手机短信登录/注册</a>
						</span>
						<div class="reverse">
							<div class="reg_forget_links" v-if="login_regise_sms">
								<a class="outer-link" href="">立即注册</a>
								<span class="segmentation">|</span>
								<a class="outer-link" href="">忘记密码？</a>
							</div>
							<!-- 收不到验证码 -->
							<div class="sms-unavaliable" v-if="!login_regise_sms">
								<a target="_blank"
									href="https://account.xiaomi.com/helpcenter/faq/_/02.faqs/05.sms-and-email-verification-code/faq-1">收不到验证码？</a>
							</div>
						</div>

						<!-- 其他登录方式 s -->
						<div style="display: block;" class="other_login_type">
							<fieldset class="oth_type_tit">
								<legend align="center" class="oth_type_txt">其他方式登录</legend>
							</fieldset>

							<div id="sns-login-links" class="oth_type_links">
								<a class="sns-qq icon_type " data-type="qq" href="" title="QQ登录" target="_blank">
									<i class="iconfont iconqq"></i>
								</a>
								<a class="btn_weibo icon_type " data-type="weibo" href="" title="微博登录" target="_blank">
									<i class="iconfont iconweibo"></i>
								</a>
								<a class="alipay icon_type " data-type="alipay" href="" title="支付宝登录" target="_blank">
									<i class="iconfont iconzhifubao"></i>
								</a>
								<a class="btn_weixin icon_type " data-type="weixin" href="" title="微信登录" target="_blank">
									<i class="iconfont iconweixin"></i>
								</a>
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
		name: "userLogin",
		data() {
			return {
				login_regise_sms: false,
				qrCode: false,
			}
		},
		methods: {
			// 账号登陆与手机号登陆 切换
			changes_user_status() {
				this.login_regise_sms = !this.login_regise_sms;
			},
			// 切换 二维码登陆 = 正常登陆
			changes_login_qrcode() {
				// this.qrCode = !this.qrCode;
				this.$emit('update:qrState', this.qrCode);
			}
		},
	}
</script>

<style lang="less" scoped>
	// 父元素
	.content {
		width: 100%;
		height: 550px;
		position: relative;

		// 二维码
		#custom_display_2 {
			width: 100%;
			height: 80px;

			a {
				width: 80px;
				height: 80px;
				line-height: 80px;
				font-size: 70px;
				text-align: center;

				&:hover {
					background-position: -80px 0;
				}
			}

			.qrCode {
				position: absolute;
				right: 0px;
				top: 0px;
				background: url(https://account.xiaomi.com/static/res/fa9e760/account-static/respassport/acc-2014/img/icon_ercode.png) no-repeat;
			}
		}

		.tablesArea {
			position: absolute;
			top: 0px;
			left: calc(50% - 175px);

			// logo 
			.lgnheader {
				width: 100%;
				height: 130px;


				// logo 大小
				svg {
					width: 48px;
					height: 48px;
					margin: 20px calc(50% - 48px) 0;
				}

				.header_tit_txt {
					font-size: 22px;
					font-weight: normal;
					margin-left: 82px;
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

					// 账号密码登陆
					.item_account {
						height: 48px;
						width: 330px;
						font-size: 14px;
						margin-bottom: 15px;
						padding-left: 15px;
						outline: none;
						border: 1px solid #E0E0E0;
					}

					// 手机号验证码登陆
					.phone_login_name {
						height: 50px;
						width: 358px;
						margin-bottom: 15px;
						box-sizing: border-box;
						overflow: hidden;
						position: relative;

						.phone_start_box {
							display: inline-block;
							width: 65px;
							height: 48px;
							line-height: 48px;
							text-align: center;
							border: 1px solid #E0E0E0;
							border-right: none;

							.phone_start {
								position: absolute;
								left: 20px;
								animation: phoneSlider;
								animation-duration: .5s;
								animation-timing-function: linear;
								animation-fill-mode: forwards;
							}

							@keyframes phoneSlider {
								from {
									left: -25px;
									z-index: -1;
								}

								to {
									left: 20px;
									z-index: 1;
								}
							}
						}

						input {
							position: absolute;
							display: inline-block;
							width: 266px;
							height: 48px;
							line-height: 48px;
							outline: none;
							padding-left: 15px;
							font: 14px;
							border: 1px solid #E0E0E0;
							margin-bottom: 15px;
						}
					}

					// 短信验证码样式
					.phone_login_msmCode {
						height: 50px;
						width: 358px;
						margin-bottom: 15px;

						.phone_login_sms {
							width: 248px;
							height: 48px;
							line-height: 48px;
							padding-left: 15px;
							font: 14px;
							outline: none;
							border: 1px solid #E0E0E0;
						}

						.code_panel {
							display: inline-block;
							width: 80px;
							height: 48px;
							line-height: 48px;
							border: 1px solid #E0E0E0;
							text-align: center;
						}
					}

					// 登陆按钮
					button {
						margin: 10px 0;
						height: 50px;
						width: 358px;
						line-height: 50px;
						color: #fff;
						outline: none;
						border: 1px solid #D9D9D9;
						background-color: #FF6700;
					}

					// 短信登陆注册 父元素
					.other_panel {
						margin-top: -5px;
						width: 358px;
						height: 188px;

						// 手机短信登录/注册 
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

								&:hover {
									color: #ff6700 !important;
								}
							}
						}

						// 注册 && 忘记密码
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

									&:hover {
										color: #ff6700 !important;
									}
								}

								span {
									text-align: center;
									color: #e0e0e0;
									padding: 0 5px;
								}
							}

							.sms-unavaliable {
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

									&:hover {
										color: #ff6700 !important;
									}
								}
							}
						}

						// 其他登陆方式
						.other_login_type {
							color: #757575;
							padding-top: 30px;
							text-align: center;

							// oth_type_tit 分割线
							.oth_type_tit {
								color: #757575;
								text-align: center;
								border-top: 1px solid #e0e0e0;
								padding-top: 10px;

								// 分割 样式
								.oth_type_txt {
									color: #b0b0b0;
									margin: 0 auto;
									text-align: center;
								}
							}

							// 其他方法QQ 微信....
							.oth_type_links {
								text-align: center;
								padding-top: 10px;
								width: 358px;
								height: 30px;

								// 字体图标
								.icon_type {
									display: inline-block;
									width: 30px;
									height: 30px;
									margin: 0 12px;
									border-radius: 50%;

									&:nth-child(1) {
										background: #0288D1;
									}

									&:nth-child(2) {
										background: #D32F2F;
									}

									&:nth-child(3) {
										background: #00AAEE;
									}

									&:nth-child(4) {
										background: #00D20D;
									}

									i {
										color: #fff;
										width: 30px;
										height: 30px;
										line-height: 30px;
										font-size: 24px;
										display: inline-block;
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