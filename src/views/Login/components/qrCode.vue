<template>
	<!-- 输入表单验证 -->
	<div class="content">
		<!-- 二维码 -->
		<div id="custom_display_2">
			<a class="qrCode" href="#" @click="changes_login_user"></a>
		</div>

		<div class="middle_Qrcode">
				
		</div>

		<div class="tablesArea">
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
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				qrCode: true,
			}
		},
		methods: {
			// 切换到账号登陆
			changes_login_user() {
				this.qrCode = !this.qrCode;
				this.$emit('update:qrState', this.qrCode);
			}
		}
	}
</script>

<style lang="less" scoped>
	// 父元素
	.content {
		position: relative;

		// 二维码
		#custom_display_2 {
			a {
				width: 80px;
				height: 80px;
				line-height: 80px;
				font-size: 70px;
				text-align: center;

				&:hover {
					background-position: -240px 0;
				}
			}

			.qrCode {
				position: absolute;
				right: 0px;
				top: 0px;
				background: url(https://account.xiaomi.com/static/res/fa9e760/account-static/respassport/acc-2014/img/icon_ercode.png) no-repeat;
				background-position: -160px 0;
			}
		}

		.tablesArea {
			position: absolute;
			top: 0px;
			left: calc(50% - 175px);

			// 其他登陆方式
			.other_login_type {
				color: #757575;
				padding-top: 50px;
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
					padding-top: 5px;
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
</style>