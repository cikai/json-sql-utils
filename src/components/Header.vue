<template>
	<div class="header-container">
		<nav>
			<div class="nav-inner">
				<div class="nav-title">
					<span>{{ title }}</span>
				</div>
				<ul class="nav-right">
					<li>
						<a href="https://github.com/cikai/jsutils" target="blank">Github</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      title: 'JS Utils - Javascript工具集'
    }
  }
}
</script>

<style scoped>
	* {
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		font-size: 1.2em;
	}

	.header-container {
		position: absolute;
		left: 0px;
		top: 0px;
		height: 50px;
		width: 100%;
		overflow: hidden;
		background: #F5F5F5;
	}

	.nav-title {
		display: inline-block;
		position: absolute;
		top: 10px;
		left: 80px;
		color: #000000;
		font-size: 1.2em;
	}

	.nav-right {
		margin-top: 10px;
		margin-right: 50px;
		list-style: none;
		float: right !important;
	}

	.nav-right>li {
		padding-left: 15px;
		float: left;
	}
</style>
