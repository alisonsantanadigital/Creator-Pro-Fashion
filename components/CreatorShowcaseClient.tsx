'use client';

import { useState } from 'react';
import PartnershipsSection from '@/components/PartnershipsSection';
import ContactSection from '@/components/ContactSection';
import { PARTNERSHIP_FORMATS } from '@/data/creatorData';

export default function CreatorShowcaseClient() {
  const [selectedFormat, setSelectedFormat] = useState<string>(
    PARTNERSHIP_FORMATS[0].title
  );

  return (
    <>
      <PartnershipsSection
        selectedFormat={selectedFormat}
        onSelectFormat={setSelectedFormat}
      />
      <ContactSection
        selectedFormat={selectedFormat}
        onSelectFormat={setSelectedFormat}
      />
    </>
  );
}
