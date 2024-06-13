import React from "react";
import styles from "../Home.module.css";
import p1 from "../../../../img/p1.jpg";
import p2 from "../../../../img/p2.jpg";
import p3 from "../../../../img/p3.jpeg";
import p4 from "../../../../img/p4.png";

const Gallery = () => {
	const images = [p1,	p2,	p3,	p4];
  
	return (
		<>
		<p className={styles.gallery_title}>Galeria de Fotos da Exmed Tech</p>
		<div className={styles.gallery}>
			{images.map((image, index) => (
				<div className={styles.gallery_item} key={index}>
					<img src={image} alt={`Gallery ${index + 1}`} />
				</div>
			))}
		</div>
		</>
	);
};

export default Gallery;