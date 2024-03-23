'use client'
import { Tabs } from 'flowbite-react';
import CentellaProduct from './centellaProduct';
import HyaluProduct from './hyaluProduct';
import ToneProduct from './toneProduct';
import PoreProduct from './poreProduct';
import {BannerProductC, BannerProductH, BannerProductP, BannerProductT} from './banner';

export default function TabsProduct() {
  return (
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" style="fullWidth">
        <Tabs.Item active title="Centella Line">
          <BannerProductC/><CentellaProduct/>
        </Tabs.Item>
        <Tabs.Item title="Hyalu-Cica">
          <BannerProductH/><HyaluProduct/>
        </Tabs.Item>
        <Tabs.Item title="Tone Brightening">
          <BannerProductT/><ToneProduct/>
        </Tabs.Item>
        <Tabs.Item title="Poremizing">
          <BannerProductP/><PoreProduct/>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
