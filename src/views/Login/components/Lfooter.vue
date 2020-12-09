<template>
	<div class="footr">
		<ul>
			<li><a href="javascript:;">简体</a>|</li>
			<li><a href="javascript:;">繁体</a>|</li>
			<li><a href="javascript:;">English</a>|</li>
			<li><a href="javascript:;">常见问题</a>|</li>
			<li><a href="javascript:;">隐私政策</a></li>
		</ul>
		<div class="end_jing">小米公司版权所有-京ICP备10046444-
			<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png" alt="">
			京公网安备11010802020134号-京ICP证110507号
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	// 底部
	.footr {
		width: 100%;

		ul {
			height: 20px;
			width: 380px;
			margin: 0 auto;
			font-size: 14px;

			li {
				display: inline-block;

				a {
					padding: 0 10px;
				}
			}
		}

		.end_jing {
			display: block;
			width: 600px;
			height: 40px;
			line-height: 55px;
			font-size: 14px;
			margin: 0 auto;
		}
	}
</style>