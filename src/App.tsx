import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { CatalogSection } from './components/CatalogSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { KpaxSection } from './components/KpaxSection';
import { LegalModal, type LegalDocType } from './components/LegalModal';
import { Navbar } from './components/Navbar';
import { QuoteSection } from './components/QuoteSection';
import { Reveal } from './components/Reveal';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ServicesSection } from './components/ServicesSection';
import type { CatalogProduct } from './data/catalog';

export function App() {
  const [selectedService, setSelectedService] = useState('Renta de equipos multifuncionales');
  const [prefilledNotes, setPrefilledNotes] = useState('');
  const [selectedSkus, setSelectedSkus] = useState<Record<string, number>>({});
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);

  const quoteCount = Object.values(selectedSkus).reduce((acc, qty) => acc + qty, 0);

  function handleAddProduct(product: CatalogProduct) {
    setSelectedSkus((prev) => ({
      ...prev,
      [product.sku]: (prev[product.sku] ?? 0) + 1,
    }));
  }

  function handleUpdateQty(sku: string, delta: number) {
    setSelectedSkus((prev) => {
      const nextQty = (prev[sku] ?? 0) + delta;
      if (nextQty <= 0) {
        const copy = { ...prev };
        delete copy[sku];
        return copy;
      }
      return { ...prev, [sku]: nextQty };
    });
  }

  function handleClearSkus() {
    setSelectedSkus({});
  }

  function handleSelectPlan(service: string, notes: string) {
    setSelectedService(service);
    setPrefilledNotes(notes);
  }

  return (
    <div className="min-h-screen bg-white text-[#0c131f]">
      <Navbar quoteCount={quoteCount} />
      <main>
        <Hero />
        <Reveal>
          <SavingsCalculator onSelectPlan={handleSelectPlan} />
        </Reveal>
        <Reveal>
          <ServicesSection onSelectService={setSelectedService} />
        </Reveal>
        <Reveal>
          <CatalogSection selectedSkus={selectedSkus} onAddProduct={handleAddProduct} />
        </Reveal>
        <Reveal>
          <KpaxSection />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <QuoteSection
            selectedService={selectedService}
            onChangeService={setSelectedService}
            prefilledNotes={prefilledNotes}
            selectedSkus={selectedSkus}
            onUpdateQty={handleUpdateQty}
            onClearSkus={handleClearSkus}
          />
        </Reveal>
      </main>
      <Footer onOpenLegal={setLegalDoc} />
      <LegalModal docType={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}

export default App;
