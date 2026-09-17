/* =========================================
   JANE'S JAMDUNG CUISINE
   WARM LUXURY / BOLD EDITORIAL DESIGN
========================================= */

:root {

    --cream: #F7F1E5;
    --cream-dark: #EDE3D2;

    --espresso: #2C211B;
    --espresso-light: #49382E;

    --forest: #315C45;
    --forest-dark: #234534;

    --blue: #4E7180;

    --gold: #C6A15B;
    --gold-light: #D8BC7C;

    --white: #FFFDF8;

    --muted: #78695E;
    --line: rgba(44, 33, 27, 0.15);

    --serif: 'Playfair Display', Georgia, serif;
    --sans: 'DM Sans', Arial, sans-serif;
}


/* =========================================
   RESET
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--cream);
    color: var(--espresso);
    font-family: var(--sans);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
}

img {
    display: block;
    width: 100%;
}


/* =========================================
   HEADER
========================================= */

.site-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    color: var(--white);
}

.nav-container {
    width: min(1400px, calc(100% - 70px));
    margin: auto;
    padding: 27px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid rgba(255,255,255,0.3);
}

.logo {
    display: flex;
    flex-direction: column;
    line-height: 0.9;
}

.logo span {
    font-family: var(--sans);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 4px;
}

.logo strong {
    font-family: var(--serif);
    font-size: 1.35rem;
    letter-spacing: 1px;
}

.nav {
    display: flex;
    align-items: center;
    gap: 34px;
}

.nav > a {
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.nav > a:not(.nav-order) {
    opacity: 0.9;
    transition: 0.2s ease;
}

.nav > a:not(.nav-order):hover {
    color: var(--gold-light);
}

.nav-order {
    background: var(--gold);
    color: var(--espresso);
    padding: 11px 20px;
    border-radius: 2px;
    font-weight: 700 !important;
    transition: 0.25s ease;
}

.nav-order:hover {
    background: var(--white);
}

.menu-toggle {
    display: none;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255,255,255,0.5);
    background: transparent;
    cursor: pointer;
    padding: 10px;
}

.menu-toggle span {
    display: block;
    height: 1px;
    background: white;
    margin: 6px 0;
}


/* =========================================
   HERO
========================================= */

.hero {
    min-height: 850px;
    height: 100vh;
    max-height: 1000px;

    position: relative;
    display: flex;
    align-items: center;

    color: var(--white);
    overflow: hidden;
}

.hero-background {
    position: absolute;
    inset: 0;
}

.hero-placeholder {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background:
        radial-gradient(circle at 70% 35%, #668B72 0%, transparent 28%),
        radial-gradient(circle at 25% 70%, #315C45 0%, transparent 35%),
        linear-gradient(120deg, #2C211B, #315C45 55%, #4E7180);

    color: rgba(255,255,255,0.45);
}

.hero-placeholder span {
    font-size: 0.7rem;
    letter-spacing: 5px;
    font-weight: 700;
}

.hero-placeholder small {
    margin-top: 8px;
    font-size: 0.75rem;
    opacity: 0.7;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(28,20,15,0.85) 0%,
            rgba(28,20,15,0.55) 48%,
            rgba(28,20,15,0.25) 100%
        );
}

.hero-content {
    position: relative;
    z-index: 2;

    width: min(1400px, calc(100% - 70px));
    margin: auto;

    padding-top: 90px;
}

.eyebrow,
.section-kicker {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 3px;
}

.eyebrow {
    color: var(--gold-light);
    margin-bottom: 24px;
}

.hero h1 {
    max-width: 850px;

    font-family: var(--serif);
    font-size: clamp(4rem, 8vw, 8.5rem);
    line-height: 0.9;
    font-weight: 700;
    letter-spacing: -4px;
}

.hero h1 em {
    display: block;
    color: var(--gold-light);
    font-weight: 500;
}

.hero-description {
    max-width: 520px;
    margin: 35px 0;

    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.82);
}

.hero-actions {
    display: flex;
    gap: 12px;
}

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 155px;
    padding: 14px 25px;

    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.5px;

    border: 1px solid transparent;

    transition: 0.25s ease;
}

.button-gold {
    background: var(--gold);
    color: var(--espresso);
}

.button-gold:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
}

.button-outline {
    border-color: rgba(255,255,255,0.65);
    color: white;
}

.button-outline:hover {
    background: rgba(255,255,255,0.1);
}

.hero-bottom {
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%);

    width: min(1400px, calc(100% - 70px));

    display: flex;
    align-items: center;
    gap: 20px;

    color: rgba(255,255,255,0.65);

    font-size: 0.6rem;
    letter-spacing: 2px;
    font-weight: 700;
}

.hero-line {
    height: 1px;
    flex: 1;
    background: rgba(255,255,255,0.25);
}


/* =========================================
   GENERAL
========================================= */

.container {
    width: min(1200px, calc(100% - 70px));
    margin: auto;
}

.section-kicker {
    color: var(--forest);
    margin-bottom: 15px;
}

.section-kicker.light {
    color: var(--gold-light);
}

.section-title {
    font-family: var(--serif);
    font-size: clamp(3rem, 6vw, 5.5rem);
    line-height: 0.95;
    letter-spacing: -2px;
}

.section-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 50px;

    margin-bottom: 65px;
}

.section-intro {
    max-width: 360px;
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.8;
}


/* =========================================
   INTRO
========================================= */

.intro {
    padding: 130px 0;
    background: var(--cream);
}

.intro-grid {
    display: grid;
    grid-template-columns: 80px 1.1fr 0.9fr;
    gap: 45px;
    align-items: start;
}

.intro-number {
    font-size: 0.7rem;
    color: var(--gold);
    font-weight: 700;
    letter-spacing: 2px;
    padding-top: 10px;
}

.intro-heading h2 {
    font-family: var(--serif);
    font-size: clamp(3rem, 5vw, 5rem);
    line-height: 0.98;
    letter-spacing: -2px;
}

.intro-heading h2 span {
    color: var(--forest);
    display: block;
    font-style: italic;
}

.intro-text {
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.9;
    padding-top: 30px;
}

.intro-text p + p {
    margin-top: 20px;
}


/* =========================================
   MENU
========================================= */

.menu-section {
    padding: 130px 0;
    background: var(--white);
}

.featured-dish {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    min-height: 570px;
    margin-bottom: 25px;
}

.image-placeholder {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    color: rgba(255,255,255,0.6);
}

.image-placeholder > div {
    text-align: center;
}

.image-placeholder span {
    font-size: 0.65rem;
    letter-spacing: 4px;
    font-weight: 700;
}

.image-placeholder small {
    display: block;
    margin-top: 8px;
    font-size: 0.7rem;
}

.image-one {
    background:
        radial-gradient(circle at 50% 35%, #C6A15B 0%, transparent 16%),
        radial-gradient(circle at 70% 65%, #668B72 0%, transparent 20%),
        linear-gradient(145deg, #315C45, #2C211B);
}

.image-two {
    background:
        radial-gradient(circle at 40% 40%, #C6A15B, transparent 18%),
        linear-gradient(145deg, #49382E, #315C45);
}

.image-three {
    background:
        radial-gradient(circle at 65% 35%, #C6A15B, transparent 15%),
        linear-gradient(145deg, #4E7180, #2C211B);
}

.image-four {
    background:
        radial-gradient(circle at 35% 55%, #D8BC7C, transparent 17%),
        linear-gradient(145deg, #315C45, #49382E);
}

.image-five {
    background:
        radial-gradient(circle at 60% 45%, #C6A15B, transparent 15%),
        linear-gradient(145deg, #4E7180, #315C45);
}

.dish-content {
    background: var(--espresso);
    color: var(--cream);

    padding: 65px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.dish-number {
    color: var(--gold);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.dish-content h3 {
    font-family: var(--serif);
    font-size: clamp(3rem, 5vw, 5rem);
    line-height: 0.95;
    margin-bottom: 25px;
}

.dish-content h3 span {
    display: block;
    color: var(--gold-light);
    font-style: italic;
}

.dish-content > p:not(.dish-number) {
    max-width: 380px;
    color: #CFC2B7;
    font-size: 0.92rem;
    line-height: 1.8;
}

.dish-bottom,
.card-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 35px;
}

.dish-bottom strong {
    font-family: var(--serif);
    color: var(--gold-light);
    font-size: 2rem;
}

.dish-bottom a,
.card-bottom a {
    color: var(--gold);
    font-size: 0.75rem;
    font-weight: 700;
}

.dish-bottom a:hover,
.card-bottom a:hover {
    color: var(--gold-light);
}


/* =========================================
   MENU CARDS
========================================= */

.menu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.menu-card {
    background: var(--cream);
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    min-height: 275px;

    transition: 0.3s ease;
}

.menu-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 45px rgba(44,33,27,0.1);
}

.card-image {
    min-height: 275px;
}

.card-content {
    padding: 30px;
    display: flex;
    flex-direction: column;
}

.card-content h3,
.special-card h3 {
    font-family: var(--serif);
    font-size: 1.75rem;
    line-height: 1;
    margin-bottom: 12px;
}

.card-content p:not(.dish-number),
.special-card p:not(.dish-number) {
    color: var(--muted);
    font-size: 0.8rem;
    line-height: 1.7;
}

.card-bottom {
    margin-top: auto;
}

.card-bottom strong {
    font-size: 0.9rem;
}

.special-card {
    background: var(--forest);
    color: var(--cream);

    min-height: 275px;
    padding: 40px;

    display: flex;
    flex-direction: column;
}

.special-card .dish-number {
    color: var(--gold-light);
}

.special-card h3 {
    font-size: 2.3rem;
}

.special-card h3 span {
    display: block;
    color: var(--gold-light);
    font-style: italic;
}

.special-card p:not(.dish-number) {
    color: rgba(255,255,255,0.72);
}

.special-card .card-bottom {
    margin-top: auto;
}

.special-card .card-bottom strong {
    color: var(--gold-light);
    font-size: 0.7rem;
    letter-spacing: 1px;
}

.menu-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    margin-top: 45px;
    padding-top: 25px;

    border-top: 1px solid var(--line);

    color: var(--muted);
    font-size: 0.75rem;
}

.menu-note > span {
    color: var(--gold);
}

.menu-note a {
    color: var(--forest);
    font-weight: 700;
}


/* =========================================
   STORY
========================================= */

.story-section {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;

    background: var(--espresso);
    color: var(--cream);
}

.story-image {
    min-height: 750px;

    background:
        radial-gradient(circle at 40% 30%, #668B72, transparent 23%),
        radial-gradient(circle at 70% 70%, #4E7180, transparent 20%),
        linear-gradient(145deg, #315C45, #2C211B);
}

.story-content {
    padding: 110px 10% 110px 90px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.story-content h2 {
    max-width: 650px;

    font-family: var(--serif);
    font-size: clamp(3.5rem, 6vw, 6.5rem);
    line-height: 0.9;
    letter-spacing: -3px;

    margin-bottom: 45px;
}

.story-content h2 span {
    display: block;
    color: var(--gold-light);
    font-style: italic;
}

.story-copy {
    max-width: 590px;

    color: #CFC2B7;
    font-size: 0.95rem;
    line-height: 1.9;
}

.story-copy p + p {
    margin-top: 18px;
}

.signature {
    margin-top: 35px;

    font-family: var(--serif);
    font-style: italic;
    color: var(--gold-light);
    font-size: 1.25rem;
}


/* =========================================
   CULTURE
========================================= */

.culture-section {
    background: var(--forest);
    color: var(--cream);

    padding: 80px 30px;
}

.culture-inner {
    width: min(1200px, 100%);
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.culture-inner > span {
    font-size: 0.65rem;
    letter-spacing: 3px;
    font-weight: 700;
    color: var(--gold-light);
    white-space: nowrap;
}

.culture-inner h2 {
    text-align: center;

    font-family: var(--serif);
    font-size: clamp(2.3rem, 5vw, 5rem);
    line-height: 0.95;
}

.culture-inner h2 span {
    color: var(--gold-light);
    font-style: italic;
}


/* =========================================
   GALLERY
========================================= */

.gallery-section {
    padding: 130px 0;
    background: var(--cream);
}

.gallery-grid {
    display: grid;
    grid-template-columns: 1.25fr 0.75fr 0.75fr;
    grid-template-rows: 260px 260px;
    gap: 18px;
}

.gallery-item {
    background:
        radial-gradient(circle at 50% 40%, #C6A15B, transparent 15%),
        linear-gradient(145deg, #315C45, #4E7180);
}

.gallery-item:nth-child(2) {
    background:
        radial-gradient(circle at 40% 40%, #C6A15B, transparent 15%),
        linear-gradient(145deg, #2C211B, #315C45);
}

.gallery-item:nth-child(3) {
    background:
        radial-gradient(circle at 65% 60%, #C6A15B, transparent 15%),
        linear-gradient(145deg, #4E7180, #2C211B);
}

.gallery-item:nth-child(4) {
    background:
        radial-gradient(circle at 35% 45%, #D8BC7C, transparent 15%),
        linear-gradient(145deg, #315C45, #49382E);
}

.gallery-item:nth-child(5) {
    background:
        radial-gradient(circle at 55% 45%, #C6A15B, transparent 15%),
        linear-gradient(145deg, #49382E, #4E7180);
}

.gallery-large {
    grid-row: span 2;
}


/* =========================================
   ORDER
========================================= */

.order-section {
    padding: 150px 25px;

    background:
        linear-gradient(
            rgba(44,33,27,0.92),
            rgba(44,33,27,0.92)
        ),
        var(--espresso);

    color: var(--cream);

    text-align: center;
}

.order-content {
    max-width: 850px;
    margin: auto;
}

.order-content .section-kicker {
    color: var(--gold-light);
}

.order-content h2 {
    font-family: var(--serif);
    font-size: clamp(4rem, 8vw, 8rem);
    line-height: 0.85;
    letter-spacing: -4px;

    margin-bottom: 35px;
}

.order-content h2 em {
    display: block;
    color: var(--gold-light);
}

.order-content > p:not(.section-kicker) {
    max-width: 500px;
    margin: auto;

    color: #CFC2B7;
    font-size: 0.95rem;
    line-height: 1.8;
}

.order-number {
    margin: 35px 0;

    font-family: var(--serif);
    font-size: clamp(2rem, 5vw, 4rem);
    color: var(--white);
}

.order-buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
}


/* =========================================
   FOOTER
========================================= */

footer {
    background: #211813;
    color: var(--cream);
    padding: 55px 35px 25px;
}

.footer-main {
    width: min(1200px, 100%);
    margin: auto;

    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 40px;

    padding-bottom: 50px;
}

.footer-logo {
    display: block;

    font-family: var(--serif);
    font-size: 1.7rem;
    font-weight: 700;
}

.footer-logo strong {
    color: var(--gold-light);
}

.footer-brand p {
    color: #9F9085;
    font-size: 0.7rem;
    letter-spacing: 2px;
    margin-top: 8px;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-links a {
    color: #CFC2B7;
    font-size: 0.78rem;
}

.footer-links a:hover {
    color: var(--gold-light);
}

.footer-contact p {
    color: var(--gold-light);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 8px;
}

.footer-contact a {
    font-family: var(--serif);
    font-size: 1.25rem;
}

.footer-bottom {
    width: min(1200px, 100%);
    margin: auto;

    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);

    display: flex;
    justify-content: space-between;

    color: #786B62;
    font-size: 0.65rem;
}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 900px) {

    .nav-container,
    .hero-content,
    .hero-bottom,
    .container {
        width: min(100% - 40px, 1200px);
    }

    .nav {
        position: absolute;
        top: 90px;
        right: 0;

        width: 260px;

        padding: 25px;

        display: none;
        flex-direction: column;
        align-items: stretch;

        background: var(--espresso);

        box-shadow: 0 20px 50px rgba(0,0,0,0.25);
    }

    .nav.open {
        display: flex;
    }

    .nav-order {
        text-align: center;
    }

    .menu-toggle {
        display: block;
    }

    .intro-grid {
        grid-template-columns: 50px 1fr;
    }

    .intro-text {
        grid-column: 2;
        padding-top: 0;
    }

    .featured-dish {
        grid-template-columns: 1fr;
    }

    .dish-image {
        min-height: 450px;
    }

    .menu-grid {
        grid-template-columns: 1fr;
    }

    .story-section {
        grid-template-columns: 1fr;
    }

    .story-image {
        min-height: 500px;
    }

    .story-content {
        padding: 80px 40px;
    }

    .culture-inner {
        flex-direction: column;
    }

    .gallery-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 280px 280px 280px;
    }

    .gallery-large {
        grid-row: span 2;
    }

    .footer-main {
        grid-template-columns: 1fr 1fr;
    }

    .footer-contact {
        grid-column: 1 / -1;
    }
}


@media (max-width: 600px) {

    .site-header {
        position: absolute;
    }

    .nav-container {
        width: calc(100% - 30px);
        padding: 20px 0;
    }

    .hero {
        min-height: 760px;
        height: auto;
    }

    .hero-content {
        width: calc(100% - 40px);
        padding-top: 100px;
    }

    .hero h1 {
        font-size: clamp(3.5rem, 17vw, 5.5rem);
        letter-spacing: -2px;
    }

    .hero-description {
        font-size: 0.9rem;
    }

    .hero-actions {
        flex-direction: column;
        align-items: stretch;
        max-width: 300px;
    }

    .button {
        width: 100%;
    }

    .hero-bottom {
        width: calc(100% - 40px);
        bottom: 20px;
    }

    .hero-bottom span:last-child {
        display: none;
    }

    .intro,
    .menu-section,
    .gallery-section {
        padding: 85px 0;
    }

    .intro-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .intro-number {
        padding: 0;
    }

    .intro-text {
        grid-column: auto;
    }

    .section-top {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 40px;
    }

    .featured-dish {
        margin-bottom: 18px;
    }

    .dish-image {
        min-height: 330px;
    }

    .dish-content {
        padding: 40px 28px;
    }

    .dish-content h3 {
        font-size: 3.2rem;
    }

    .menu-card {
        grid-template-columns: 1fr;
    }

    .card-image {
        min-height: 230px;
    }

    .card-content {
        min-height: 220px;
    }

    .special-card {
        min-height: 280px;
    }

    .menu-note {
        flex-wrap: wrap;
        text-align: center;
    }

    .story-image {
        min-height: 380px;
    }

    .story-content {
        padding: 70px 25px;
    }

    .story-content h2 {
        font-size: 3.7rem;
        letter-spacing: -2px;
    }

    .culture-section {
        padding: 65px 20px;
    }

    .culture-inner h2 {
        font-size: 3rem;
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 260px);
    }

    .gallery-large {
        grid-row: span 1;
    }

    .order-section {
        padding: 100px 20px;
    }

    .order-content h2 {
        font-size: 4.5rem;
        letter-spacing: -2px;
    }

    .order-buttons {
        flex-direction: column;
        max-width: 300px;
        margin: auto;
    }

    .footer-main {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .footer-contact {
        grid-column: auto;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 8px;
    }
}
