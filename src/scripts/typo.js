export default function () {
    const container = document.getElementById('demo-container');
    if (!container) return;

    const demoTypo = document.createElement('div');

    let innerHTML = ``;

    innerHTML += `
      <div>
       
		<h2 class="demo-secondary-header text--bold">Headline display</h2>
		<div class="demo-typo">
			<p class="h1-des">ddes/headline/h1-light</p>
			<p class="h1-mob">dmob/headline/h1-light</p>
			<p class="h1-des text--bold">ddes/headline/h1-bold</p>
			<p class="h1-mob text--bold">dmob/headline/h1-bold</p>
			
            <p class="h2-des">ddes/headline/h2-light</p>
			<p class="h2-mob">dmob/headline/h2-light</p>
			<p class="h2-des text--bold">ddes/headline/h2-bold</p>
			<p class="h2-mob text--bold">dmob/headline/h2-bold</p>
			
			<p class="h3-des">ddes/headline/h3-light</p>
			<p class="h3-mob">dmob/headline/h3-light</p>
			<p class="h3-des text--bold">ddes/headline/h3-bold</p>
			<p class="h3-mob text--bold">dmob/headline/h3-bold</p>
			
			<p class="h4-des">ddes/headline/h4-light</p>
			<p class="h4-mob">dmob/headline/h4-light</p>
			<p class="h4-des text--bold">ddes/headline/h4-bold</p>
			<p class="h4-mob text--bold">dmob/headline/h4-bold</p>
			
			<p class="h5-des">ddes/headline/h5-light</p>
			<p class="h5-mob">dmob/headline/h5-light</p>
			<p class="h5-des text--bold">ddes/headline/h5-bold</p>
			<p class="h5-mob text--bold">dmob/headline/h5-bold</p>
		</div>
		
	    <h2 class="demo-secondary-header text--bold">Body display</h2>
		<div class="demo-typo--single">
		    <p class="body-lg--light">body/body-large-light</p>
		    <p class="body-lg--regular">body/body-large-regular</p>
		    <p class="body-lg--semiBold">body/body-large-semibold</p>
		    <p class="body-md--light">body/body-light</p>
		    <p class="body-md--regular">body/body-regular</p>
		    <p class="body-md--semiBold">body/body-semibold</p>
		    <p class="body-sm--light">body/body-small-light</p>
		    <p class="body-sm--regular">body/body-small-regular</p>
		    <p class="body-sm--semiBold">body/body-small-semibold</p>
        </div>
        
        <h2 class="demo-secondary-header text--bold">Editorial display</h2>
        <div class="demo-typo--single">
            <p class="editorial--intro-copy">ddes/editorial/intro-copy</p>
            <p class="editorial--body-copy">ddes/editorial/body-copy</p>
            <p class="editorial--quote-bold">ddes/editorial/quote-bold</p>
            <p class="editorial--attribution">ddes/editorial/attribution</p>
        </div>
        
        <h2 class="demo-secondary-header text--bold">Form display</h2>
        <div class="demo-typo--single">
            <p class="input-label">forms/input-label</p>
            <p class="input-error">forms/input-error</p>
        </div>
        
        <h2 class="demo-secondary-header text--bold">Others display</h2>
        <div class="demo-typo--single">
            <p class="typo-nav-1st-level">ddes/others/nav-1st-level</p>
            <p class="typo-primary-link">ddes/others/primary-link</p>
            <p class="typo-eyebrow">ddes/others/eyebrow</p>
            <p class="typo-eyebrow-small">ddes/others/eyebrow-small</p>
            <p class="typo-utility">others/utility</p>
            <p class="typo-label">others/label</p>
            <p class="typo-label--sm">others/labeL-SM</p>
            <p class="typo-footer-link">others/footer-link</p>
            <p class="typo-tag">others-all/tag</p>
            <p class="typo-disclaimer">others-all/disclaimer</p>
        </div>
        
      </div>
   `;

    innerHTML += `</div>`;

    demoTypo.innerHTML = innerHTML;

    // Render
    container.innerHTML = '<h1 style="padding-bottom: 20px">Demo Typography</h1>';
    container.appendChild(demoTypo);
}
