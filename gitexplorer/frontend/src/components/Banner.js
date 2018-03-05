import React from 'react';

export function Banner(props){
	//const {banner} = props;
	return(
      <section id="banner">
        <div class="inner">
          <div class="logo"><span class="icon fa-diamond"></span></div>
          <h2>Git Repos Explorer</h2>
          <p>Git Repos es una aplicación hecho con <code>ReactJS</code> y <code>Django Rest Framework</code> para explorer
          los repositorios públicos de un usuario de github.</p>
        </div>
      </section>			
	);
}