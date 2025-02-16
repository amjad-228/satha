export function Map(url: string) {
    return (
        <div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src={url}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}