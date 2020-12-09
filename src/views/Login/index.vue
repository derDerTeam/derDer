<template>
	<div id="wrapper">
		<!-- 主体 -->
		<div class="main-content">
			<userLogin v-if="qrCode" :qrState.sync="qrCode"></userLogin>
			<qrCode v-else="!qrCode" :qrState.sync="qrCode"></qrCode>
		</div>
		<Lfooter></Lfooter>
	</div>
</template>

<script>
	import userLogin from "./components/userLogin";
	import Lfooter from "./components/Lfooter";
	import qrCode from "./components/qrCode"
	export default {
		name: "Login",
		data() {
			return {
				qrCode: true,
			}
		},
		methods: {

		},
		components: {
			userLogin,
			Lfooter,
			qrCode
		}
	}
</script>

<style lang="less" scoped>
	#wrapper {
		background-color: #F5F5F5;

		.main-content {
			background-color: #fff;
			max-width: 854px;
			height: 550px;
			margin: 0 auto 20px;
		}
	}
</style>