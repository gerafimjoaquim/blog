import { posts } from './database.js'
import { setCopyright, moveTo } from './utilities.js'

const postsContainer = document.querySelector('[data-js="posts"]')

let template = ''

posts.forEach(post => {
	const desc = post.description
	const lio = desc.lastIndexOf(' ', 100)
	const summary = desc.slice(0, lio)

	template += `
	<div class="post">
		<div>
			<figure>
				<img src="${post.image}" alt="Imagem do artigo ${post.title}">
				<figcaption><a href="#">${post.category}</a></figcaption>
			</figure>			
		</div>
		<div>
			<div><h3>${post.title}</h3></div>
			<div><p>${summary}...</p></div>
			<div><button>Ler Artigo</button></div>
		</div>
		<div>
			<p>Por <a href="#">${post.author}</a> - <span>${post.date}</span></p>
		</div>
	</div>
	`
})

postsContainer.innerHTML = template

document.querySelector('.top')
.addEventListener('click', moveTo)

setCopyright()