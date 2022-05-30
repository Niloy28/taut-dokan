import { Container } from "@mui/material";
import Head from "next/head";

import styles from "../styles/Condition.module.css";

export default function RefundPolicy() {
	return (
		<div>
			<Head>
				<title>Refund Policy</title>
			</Head>

			<main>
				<br />
				<br />
				<Container className="container" maxWidth="md">
					<h1>Refund Policy</h1>

					<h2>Refund</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus
						porro, esse earum qui rerum nulla magni sapiente, unde debitis autem
						veniam enim
					</p>
					<br />
					<br />
					<h3>Conditions</h3>
					<div className={styles.content}>
						<ol className="object-center">
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At
								voluptates labore eius, blanditiis cumque, deserunt asperiores
								velit illo consectetur veniam assumenda minima! Aliquid tempore
								rerum tenetur? Vero perspiciatis ut aut.
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium, nemo repellat voluptatum impedit dolores
								perspiciatis dicta molestiae cum illo alias reiciendis dolor
								culpa eveniet atque qui, non veritatis, veniam optio.
							</li>
							<li>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
								amet libero, quae natus iusto magnam quia molestiae temporibus
								ut fugiat, harum nisi a officia dicta, rem quod maiores nostrum
								voluptas.
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
								suscipit, nihil quas quo optio eaque! Qui, facilis blanditiis
								placeat repellendus fugiat, tempore eum at minima dicta, quos
								sed molestias vitae?
							</li>
						</ol>
					</div>
				</Container>
			</main>
		</div>
	);
}
