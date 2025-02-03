import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { DivIcon, LatLngTuple } from 'leaflet'

// Define custom icon
const customIcon = new DivIcon({
  html: `
    <img 
      src="/images/tow-truck-icon.svg" 
      alt="custom icon" 
      style="width: 32px; height: 32px;"
    />
  `,
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

// Sample data for a single tow truck location
const towTruckLocation = [
  { position: [21.4946461, 39.1735574] as LatLngTuple, name: 'سطحة 1' },
  {position: [21.516305, 39.163583] as LatLngTuple, name: 'سطحة 2'},
]

const UpdateInteractivity = ({ isInteractive }: { isInteractive: boolean }) => {
  const map = useMap()

  // Update interactivity settings based on state
  map.dragging[isInteractive ? 'enable' : 'disable']()
  map.scrollWheelZoom[isInteractive ? 'enable' : 'disable']()
  map.doubleClickZoom[isInteractive ? 'enable' : 'disable']()
  map.touchZoom[isInteractive ? 'enable' : 'disable']()

  return null
}

const LocalMapComponent = () => {
  const [isInteractive, setIsInteractive] = useState(false)
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    // التأكد من أننا في بيئة المتصفح
    if (typeof window !== 'undefined') {
      setIsBrowser(true)
    }
  }, [])

  const toggleMapInteraction = () => {
    setIsInteractive((prev) => !prev)
  }

  if (!isBrowser) {
    return null // Prevent rendering the map on SSR
  }

  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      {/* Button to toggle interactivity */}
      <button
        onClick={toggleMapInteraction}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          padding: '10px 20px',
          backgroundColor: isInteractive ? '#ff0000' : '#00b894',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isInteractive ? 'تعطيل التحكم بالخريطة' : 'تمكين التحكم بالخريطة'}
      </button>
      
      {/* MapContainer */}
      <MapContainer 
        center={towTruckLocation[0].position} 
        zoom={14} 
        style={{ height: '400px', width: '100%' }}
        attributionControl={false}  // Optional: Remove attribution controls if needed
      >
        
        <UpdateInteractivity isInteractive={isInteractive} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Display single marker */}
        {towTruckLocation.map((location, index) => (
          <Marker key={index} position={location.position} icon={customIcon}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default LocalMapComponent
