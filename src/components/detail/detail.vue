<template>
	<div transition="expand">
		<layout-header></layout-header>
		<div class="image-switch swiper-container swiper-container-horizontal" style="overflow: hidden;">
			<ul class="image-scroll swiper-wrapper">
	           <li v-for ="i in custom.image" class="">
                     
               </li>			
			</ul>
		</div>
		<!--  <div class="image-switch swiper-container swiper-container-horizontal" style="height:{{tool.height}}px; overflow: hidden;">
                    
            <ul class="image-scroll swiper-wrapper">
            	<li class="swiper-slide" v-for = "i in custom">
            		
            		<img style="width:100%;background:#09c;" src="{{ v.url }}" /> 
            	</li>
            	                {{each image as v i}}
                    {{if i == 0}}
                    <li class="swiper-slide">
                        <img style="width:100%; height:{{tool.height}}px;background:#09c;" src="{{ v.url }}?width={{ tool.width }}&height={{ tool.height }}" />
                    </li>
                    {{/if}}
                    {{if i > 0 }}
                    <li class="swiper-slide">
                        <img class="swiper-lazy" style="width:100%; height:{{tool.height}}px;background:#09c;" src="<%= grunt.loading(); %>" data-src="{{ v.url }}?width={{ tool.width }}&height={{ tool.height }}" />
                    </li>
                    {{/if}}
                {{/each}}
            </ul>
            <div class="c-page"><span class="c-pageNum">1</span>/{{ image.length }}</div>
         </div> -->
	</div>
</template>		
	
<style lang="less" src="./detail.less"></style>
<script src="./detail.js"></script>