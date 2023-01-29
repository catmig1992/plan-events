const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/style.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a className="Nav-text" href="/">Home</a>
                        </li>
                        <li>
                        <a className="Nav-text" href="/services">Services</a>
                        </li>
                        <li>
                        <a className="Nav-text"href="/gallery">Gallery</a>
                        </li>
                        <li><a href="">
        <button className="button">Build Your Own Event</button>
    </a></li>
                    </ul>
                    </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def