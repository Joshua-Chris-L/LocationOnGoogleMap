//Properties a class should have before they can be added to marker
// Even thought the type mapable are both of numbers they can fufil several conditions 
// When added to the function mappable
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
    color: string;
}

export class CustomMap{
    // creates an instance of google map with the type
    private googleMap: google.maps.Map;

    constructor (divId: string){
       this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
             lat: 0,
             lng: 0
            }
         });
    }

    addMarker(mappable: Mappable): void {
       const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
            lat: mappable.location.lat,
            lng: mappable.location.lng
        }
       });

       marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
           content: mappable.markerContent()
        });
        infoWindow.open(this.googleMap, marker)
       })

    }
}

    // addCompanyMarker(company: Company): void{
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })

    // }