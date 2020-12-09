<template>
	<div id="wrapper">
		<!-- 主体 -->
		<div class="main-content">

		</div>
		<Lfooter></Lfooter>
	</div>
</template>

<script>
	import Lfooter from "./components/Lfooter";
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
			height: 100%;
			margin: 0 auto 20px;
		}
	}
</style>