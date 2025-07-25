import React from 'react'
import Main from "@/components/main"

const index = () => {
  return (
    <>
      <div class="navigation">
        <img src="https://brackets.io/img/brackets.svg" alt="Logo" />

        <nav class="name">
          <ul>
            <li><a href="https://brackets.io/contribute.html" target="_blank">Contribute</a></li>
            <li><a href="https://brackets.io/docs/current/modules/brackets.html" target="_blank">API Docs</a></li>
            <li><a href="https://registry.brackets.io/" target="_blank">Extensions</a></li>
            <li><a href="https://github.com/brackets-cont/brackets/discussions" target="_blank">Support</a></li>
          </ul>
        </nav>

        <nav class="sym">
          <ul>
            <li><a href="https://github.com/brackets-cont/brackets" target="_blank"><svg height="16"
              aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="16" data-view-component="true"
              class="octicon octicon-mark-github v-align-middle">
              <path
                d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z">
              </path>
            </svg></a></li>
            <li><a href="https://x.com/BracketsCont" target="_blank"><svg height="16" width="16" viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
              <g>
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                </path>
              </g>
            </svg></a></li>
            <li><a href="https://discord.com/invite/rBpTBPttca" target="_blank"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" width="18" height="18">
              <path fill="#000000"
                d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg></a></li>
            <li><a href="https://www.youtube.com/channel/UCNK2a8DKqPQQe3GlfTk-RHg" target="_blank"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 124" width="18" height="18">
              <path fill="#000000"
                d="M172.32,19.36c-2.02-7.58-7.98-13.54-15.56-15.56C143.04,0,88,0,88,0S32.96,0,19.24,3.8C11.66,5.82,5.7,11.78,3.68,19.36,0,33.08,0,62,0,62s0,28.92,3.68,42.64c2.02,7.58,7.98,13.54,15.56,15.56C32.96,124,88,124,88,124s55.04,0,68.76-3.8c7.58-2.02,13.54-7.98,15.56-15.56C176,90.92,176,62,176,62S176,33.08,172.32,19.36Z" />
              <polygon fill="#FFFFFF" points="70,88.17 116,62 70,35.83 70,88.17" />
            </svg></a></li>
          </ul>
        </nav>
      </div>
      <Main />
      <section class="about">
        <div class="why">
          <h1>Why Use Brackets?</h1>
          <p>Brackets is a lightweight, yet powerful, modern text editor. We blend visual tools into the editor so you
            get the right amount of help when you want it without getting in the way of your creative process.
            You&apos;ll enjoy writing code in Brackets.</p>
        </div>

        <div class="made">
          <h1>Made with <svg width="23" height="23" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 3C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 3C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.041 1.55 8.5C1.5487 9.959 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.45 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61Z"
              fill="#2563eb" stroke="#2563eb" stroke-width="1" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg> and JavaScript</h1>
          <p>Brackets is an open-source project, supported by an active and passionate community. It&apos;ll made by other
            web developers like you! <a href="https://brackets.io/contribute.html" target="_blank">Learn How to
              Contribute…</a></p>
        </div>
      </section>

      <section class="features">
        <div class="headingfeatures">
          <h1>Features</h1>
        </div>

        <div class="flexx">

          <div class="box">
            <div class="number">1</div>
            <h2 class="middle">Inline Editors</h2>
            <p>Instead of jumping between file tabs, Brackets lets you open a window into the code you care about
              most.
            </p>
          </div>

          <div class="box">
            <div class="number color">2</div>
            <h2 class="middle">Live Preview</h2>
            <p>Get a real-time connection to your browser. Make changes to CSS and HTML and you&apos;ll instantly see
              those changes on screen.
            </p>
          </div>

          <div class="box">
            <div class="number colors">3</div>
            <h2 class="middle">Preprocessor Support
            </h2>
            <p>Work with preprocessors in a whole new way. We know how important preprocessors are to your workflow.
            </p>
          </div>

        </div>
      </section>

      <section class="extensions">
        <div class="popular">Popular Extensions</div>

        <div class="container">

          <div class="cube">
            <div class="git"><a href="https://github.com/brackets-userland/brackets-git" target="_blank">Git</a>
            </div>
            <div class="branches">Git integration for Brackets.</div>
          </div>

          <div class="cube">
            <div class="git"><a href="https://github.com/ivogabe/Brackets-Icons" target="_blank">Files Icons</a>
            </div>
            <div class="branches">File icons in Brackets’ file tree.</div>
          </div>

          <div class="cube">
            <div class="git"><a href="https://github.com/emmetio/brackets-emmet" target="_blank">Emmet</a></div>
            <div class="branches">High-speed HTML and CSS workflow.</div>
          </div>

          <div class="cube">
            <div class="git"><a href="https://github.com/lkcampbell/brackets-indent-guides" target="_blank">Indent
              Guides</a></div>
            <div class="branches">Show indent guides in the code editor.</div>
          </div>

          <div class="cube">
            <div class="git"><a href="https://github.com/brackets-beautify/brackets-beautify"
              target="_blank">Beautify</a></div>
            <div class="branches">Format JavaScript, HTML, and CSS files.</div>
          </div>

          <div class="cube">
            <div class="git"><a href="https://github.com/mikaeljorhult/brackets-autoprefixer"
              target="_blank">Autoprefixer</a></div>
            <div class="branches">Parse CSS and add vendor prefixes automatically.</div>
          </div>

          <div class="cube">
            <div class="git"><a href="https://github.com/gruehle/MarkdownPreview" target="_blank">Markdown
              Preview</a></div>
            <div class="branches">Live preview of markdown documents.</div>
          </div>

          <div class="cube">
            <div class="git"><a href="https://github.com/cfjedimaster/brackets-w3cvalidation" target="_blank">W3C
              Validation</a></div>
            <div class="branches">Git integration for Brackets.</div>
          </div>
        </div>

        <a href="https://registry.brackets.io/" class="bbutton" target="_blank">Check Out New Extensions</a>
      </section>

      <section class="footer">
        <div class="flex">
          <div class="four">
            <p>Quick Links</p>
            <ul>
              <li><a href="https://github.com/brackets-cont/brackets">Source Code on Github</a></li>
              <li><a href="https://brackets.io/docs/current/modules/brackets.html">API Documentation</a></li>
              <li><a href="https://github.com/brackets-cont/brackets/wiki/Troubleshooting">Troubleshooting
                Help</a></li>
              <li><a href="https://github.com/brackets-cont/brackets/wiki">Wiki</a></li>
            </ul>
          </div>

          <div class="four">
            <p>Videos</p>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=rvo3Mv1Z4qU">Introducing Brackets</a></li>
              <li><a href="https://www.youtube.com/watch?v=Nhvj1NYC3Uc">Live Development for HTML</a></li>
              <li><a href="https://www.youtube.com/watch?v=T6d5C3rLeFY">JavaScript Debugger for Brackets</a></li>
              <li><a href="https://webdesign.tutsplus.com/introduction-to-brackets--CRS-200022c">Tuts+ Introduction to Brackets</a></li>
              <li><a href="https://www.youtube.com/user/CodeBrackets">Brackets Videos on Youtube</a></li>
            </ul>
          </div>

          <div class="four">
            <p>Get Involved</p>
            <ul>
              <li><a href="https://github.com/brackets-cont/brackets/issues">Checkout Current Issues on GitHub</a></li>
            </ul>
          </div>

          <div class="four">
            <p>Keep in Touch</p>
            <ul>
              <li><a href="https://matrix.to/#/%23brackets-cont:matrix.org">Matrix</a></li>
              <li><a href="https://discord.com/invite/rBpTBPttca">Discord</a></li>
              <li><a href="https://www.reddit.com/r/brackets/">Reddit</a></li>
            </ul>
          </div>
        </div>

        <div class="foot">Brackets is maintained by the brackets.io community. It was founded by Adobe as a community guided, open source project to push web development editors to the next level.</div>
      </section>
    </>
  )
}

export default index