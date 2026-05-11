import { Map, MapMarker, MarkerContent, MapPopup } from "@/components/ui/map";

const AFHUB = {
  lng: -57.624129718013315,
  lat: -25.28706827103126,
};

const CARTO_POSITRON =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

export default function LocationMap() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-3 md:-inset-5 border border-gold/30 -translate-x-3 -translate-y-3 md:-translate-x-5 md:-translate-y-5 pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10 w-full aspect-[4/3] overflow-hidden rounded-md border border-navy/10 shadow-2xl shadow-navy/10 bg-[#f5f5f0]">
        <Map
          theme="light"
          center={[AFHUB.lng, AFHUB.lat]}
          zoom={15.6}
          styles={{ light: CARTO_POSITRON }}
          cooperativeGestures
          attributionControl={{ compact: true }}
        >
          <MapMarker longitude={AFHUB.lng} latitude={AFHUB.lat}>
            <MarkerContent>
              <div className="relative">
                <span className="absolute inset-0 -m-2 rounded-full bg-gold/25 animate-ping" />
                <span className="relative block h-6 w-6 rounded-full bg-gold border-[3px] border-navy shadow-lg shadow-navy/40 transition-transform duration-200 hover:scale-110" />
              </div>
            </MarkerContent>
          </MapMarker>

          <MapPopup
            longitude={AFHUB.lng}
            latitude={AFHUB.lat}
            offset={26}
            closeOnClick={false}
            closeOnMove={false}
            anchor="bottom"
            className="!max-w-none !rounded-sm !border !border-navy/10 !bg-white !p-0 !shadow-[0_18px_40px_rgba(0,27,53,0.18)]"
          >
            <div className="font-sans px-5 py-4 min-w-[220px]">
              <div className="font-serif text-[17px] leading-tight font-semibold text-navy tracking-tight">
                AF <span className="text-gold">|</span> HUB de Negocios
              </div>
              <span className="block h-px w-8 bg-gold my-2.5" />
              <div className="text-[12px] leading-relaxed text-ink/70">
                Eligio Ayala c/ Brasil, 1079
              </div>
            </div>
          </MapPopup>
        </Map>
      </div>
    </div>
  );
}
