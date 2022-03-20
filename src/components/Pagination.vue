<template lang="">
	<nav aria-label="Page navigation example">
		<ul class="pagination">
			<li class="page-item" :class="{ disabled: pages.has_pre !== true }">
				<a class="page-link" href="#" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			<li
				class="page-item"
				:class="{ active: pages.current_page === page }"
				v-for="page in pages.total_pages"
				:key="'page' + page"
			>
				<a class="page-link" href="#">{{ page }}</a>
			</li>
			<li
				class="page-item"
				:class="{ disabled: pages.has_next !== true }"
			>
				<a class="page-link" href="#" aria-label="Next">
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</template>
<script>
export default {};
</script>
<style lang=""></style>
