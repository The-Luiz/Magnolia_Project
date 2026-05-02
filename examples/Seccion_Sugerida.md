   <!-- Donation Section -->
    <section class="donation-section" id="donar">
      <div class="section-header">
        <div class="section-tag" data-i18n="donation.tag">Donar</div>
        <h2 data-i18n="donation.title">Realiza tu Donación</h2>
        <p data-i18n="donation.subtitle">Escanea el código QR o copia la dirección de billetera para enviar tu contribución en Bitcoin</p>
      </div>

      <div class="donation-container">
        <div class="donation-card fade-in">
          <div class="qr-container">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" alt="Código QR para donación Bitcoin" id="qr-code">
          </div>
          <div class="wallet-address" id="wallet-address">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</div>
          <button class="copy-btn" id="copy-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span data-i18n="donation.copy">Copiar Dirección</span>
          </button>
        </div>

        <div class="donation-info fade-in">
          <h3 data-i18n="donation.howToTitle">Cómo Donar</h3>
          <ul class="info-list">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              <div>
                <strong data-i18n="donation.step1.title">Abre tu billetera Bitcoin</strong>
                <span data-i18n="donation.step1.desc">Usa cualquier billetera compatible con BTC (Coinbase, Binance, Trust Wallet, etc.)</span>
              </div>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg>
              <div>
                <strong data-i18n="donation.step2.title">Escanea el código QR</strong>
                <span data-i18n="donation.step2.desc">O copia la dirección manualmente haciendo clic en el botón de copiar</span>
              </div>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              <div>
                <strong data-i18n="donation.step3.title">Ingresa el monto</strong>
                <span data-i18n="donation.step3.desc">Cantidad mínima sugerida: 0.001 BTC. Puedes enviar cualquier cantidad.</span>
              </div>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <div>
                <strong data-i18n="donation.step4.title">Confirma la transacción</strong>
                <span data-i18n="donation.step4.desc">Revisa los detalles y confirma. La transacción se procesará en ~10 minutos.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
