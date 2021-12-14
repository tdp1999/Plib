export default function () {
    const demoPrimaryLinkContainer = document.createElement('div');
    const title = document.createElement('h2');
    title.classList.add('my-3');
    title.textContent = "Link Primary";

    const demoPrimaryLink = document.createElement('div');
    demoPrimaryLink.style.backgroundColor = 'lightgray';
    demoPrimaryLink.innerHTML = `
        <h4 class="text--bold">Link Inline</h4>
        <a href="#" class="link-inline link-inline--lg">Link Inline LG</a>
        <a href="#" class="link-inline link-inline--md">Link Inline MD</a>
        <a href="#" class="link-inline link-inline--sm">Link Inline SM</a>

        <h4 class="text--bold">Link Utility</h4>
        <a href="#" class="link-utility">Link Utility</a>
        <br>
        <a href="#" class="link-utility link-utility--left-icon">
            <span>Link Utility</span>
            <i class="icon-search"></i>
        </a>
        <br>
        <a href="#" class="link-utility link-utility--right-icon">
            <span>Link Utility</span>
            <i class="icon-search"></i>
        </a>

        <h4 class="text--bold">Link Primary</h4>
        <!-- Why we need d-inline-flex? compare it with this block below! -->
        <a href="#" class="link-primary link-primary--right-icon">
            <span>Desktop Link Primary LG</span>
            <i class="icon-arrow-right text--red"></i>
        </a>
        <!--<br>
        <a href="#" class="link-primary d-block">Desktop Link Primary LG<i class="icon-arrow-right vertical-align-center text&#45;&#45;red"></i></a>-->
        
        <h4 class="text--bold">Link Action</h4>
        <a href="#" class="link-action link-action--lg link-action--left-icon">
            <span>Link Action LG</span>
            <i class="icon-download text--red"></i>
        </a>
        <br>
        <a href="#" class="link-action link-action--md link-action--left-icon">
            <span>Link Action MD</span>
            <i class="icon-download text--red"></i>
        </a>
        <br>
        <a href="#" class="link-action link-action--sm link-action--left-icon">
            <span>Link Action SM</span>
            <i class="icon-download text--red"></i>
        </a>
        <br>
        <a href="#" class="link-action link-action--lg link-action--right-icon">
            <span>Link Action LG</span>
            <i class="icon-download text--red"></i>
        </a>
        <br>
        <a href="#" class="link-action link-action--md link-action--right-icon">
            <span>Link Action MD</span>
            <i class="icon-download text--red"></i>
        </a>
        <br>
        <a href="#" class="link-action link-action--sm link-action--right-icon">
            <span>Link Action SM</span>
            <i class="icon-download text--red"></i>
        </a>
        
         <h4 class="text--bold">Link Action Row</h4>
         <div class="d-inline-block">
             <a href="#" class="link-action link-action--lg link-action--left-icon mr-lg-5">
                <span>Link Action LG</span>
                <i class="icon-download text--red"></i>
            </a>
            <a href="#" class="link-action link-action--lg link-action--left-icon mr-lg-5">
                <span>Link Action LG</span>
                <i class="icon-download text--red"></i>
            </a>
            <a href="#" class="link-action link-action--lg link-action--left-icon">
                <span>Link Action LG</span>
                <i class="icon-download text--red"></i>
            </a>
        </div>
       
    `;

    // append to div parent
    demoPrimaryLinkContainer.appendChild(title);
    demoPrimaryLinkContainer.appendChild(demoPrimaryLink);

    return demoPrimaryLinkContainer;
}