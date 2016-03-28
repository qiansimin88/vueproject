<template>
	<div transition="expand">
	<nav class="navbar">
		<img src="/static/resource/logo.png" class="logo" @click="show"/>
		<input type="text" class="search" placeholder="输入您喜欢的数据模型名称" />
	</nav>
	<div class="banner">
		<div class="swiper-container swiper-container-horizontal">
			<ul class="swiper-wrapper">
				<li class="swiper-slide" v-for="b of bannerimg">
					<a v-link="{ path:'/list' }" style="display: block; position: relative;">
						<img :src="b.url" alt="" class="banner-show" style="width:100%; background:#09c;">
					</a>
				</li>
			</ul>
			<div class="swiper-pagination"></div>
		</div>
<!-- 		<img src="//m.3dker.cn/index/resource/banner.png" /> -->
	</div>
	<div class="recommend">
		<!-- <div class="i-recommend">
			<div class="title">主题推荐</div>
			<div class="recommend-list">
				<ul class="theme-recommend">
					<li v-for="t in topicItem"> -->
						<!-- {{ t.pageName }}	 -->
						<!-- <a :href=""></a>
					</li>
				</ul>	
			</div>
		</div>	 -->

		<div class="data-recommend">
			<div class="title">精品推荐
				<div class="more3d-data">
					<a v-link="{path:'/list'}">
						更多3D数据
						<span class="show-arrow">
							<i class="iconfont icon-xiajiantou jiantouspce"></i>
						</span>
					</a>
				</div>
			</div>
				<div class="recommend-list">
						<div class="ecommend-list-container" v-for="er in editor_recommend">
							<a v-if="er._id" v-link="{ name : 'detail', params : { _id : er._id } }">
								<div class="ecommend-list-box">
									<img class="item-img" v-bind:src="er.main_img.url" onload="lzld(this)"/>	
									<div class="item-box">
										<div class="item-user">
											<div class="items-avatar-box">
												<img v-bind:src="er.issue_by.avatar" v-bind:data-src="er.issue_by.avatar" alt="">
											</div>
											<div class="items-usr-name">{{ er.issue_by.name }}</div>
											<div class="items-model-download">
												<i class="iconfont icon-clouddownload">
													{{ er.download }}
												</i>
											</div>
										</div>
										<div class="items-title">
											{{ er.title }}
										</div>
										<div class="items-data">
											<div class="items-data-like row"><i class="iconfont icon-zan"></i><span>1213</span></div>
											<div class="items-data-comments row"><i class="iconfont icon-pinglun"></i><span>2323</span></div>
											<div class="items-data-viewed row"><i class="iconfont icon-chakan"></i><span>{{ er.viewed }}</span></div>
										</div>
									</div>
								</div>
							</a>
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>

<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
