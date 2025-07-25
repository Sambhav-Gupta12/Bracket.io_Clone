import React from 'react'

const main = () => {
  return (
    <section class="main">
        <div class="heading">
            <h1>Modern, Powerful & Open source</h1>
        </div>
        <p class="fpara">With focused visual tools and preprocessor support, Brackets is a modern text editor that</p>

        <p class="fpara">makes it easy to design in the browser. It's crafted from the ground up for web designers</p>

        <p class="fpara"> and front-end developers.</p>

        <p class="spara">Brackets recommends users upgrade to Phoenix Code – the next generation of Brackets, built for
            you.</p>

        <a class="download" href="https://phcode.io/#/home" target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>Download from phcode.io</a>

        <div class="core">
            <span>Installer Built and Signed by <a href="https://core.ai/">core.ai</a></span>
        </div>

        <a href="https://github.com/brackets-cont/brackets/releases" class="other">Other Downloads</a>
    </section>
  )
}

export default main