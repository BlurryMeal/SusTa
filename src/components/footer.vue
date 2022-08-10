<template>
	<div class="flexfoot">
		<div class="col left">
			<p class="zero">&copy; MINET</p>
		</div>

		<div class="col icon">
			<p class="zero flex-right">
				SusTa Company
			</p>
		</div>
	</div>
</template>

<style scoped>
.arnh {
	margin-top: 0.35em;
	display: none;
}

.spotify-component {
	margin-top: 2em;
}

.socials {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: -2.3em;
}

.flex-right {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-direction: column;
}

.socials a {
	color: #69e;
	transition: 0.3s;
	font-size: 1.1em;
	margin: 0;
	padding: 0.5em;
	margin-left: 0.35em;
}

@media (max-width: 750px) {
	.flex-right {
		align-items: flex-start;
	}
	.socials a {
		margin-left: 0;
		padding: 0;
		margin-right: 1em;
		padding: 0.25em 0.25em 0.25em 0;
	}
	.socials {
		margin-top: 1em;
	}
	.arnh {
		display: none;
	}
}

.socials a:hover {
	opacity: 0.75;
}

.flexfoot {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 0 2em 0;
}
.col {
	flex: 1 1 0px;
}

@media (max-width: 750px) {
	.flexfoot {
		flex-direction: column;
		align-items: flex-start;
		padding-bottom: 1em;
	}
	.col {
		width: 100%;
	}
	.flexfoot {
		margin-bottom: 1em;
	}
	.flexfoot p {
		text-align: center;
	}
	.flex-right {
		justify-content: center;
		flex-direction: row;
	}
}
</style>
