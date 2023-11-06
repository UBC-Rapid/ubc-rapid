import React from 'react';
import '../../App.css';
import './Printing.css';
import { Button } from '../Button';

export default function Printing() {
    return (
        <>
            <h1 className='printing'>PRINTING</h1>
            <div className='printing_wrapper'>

                <h1>Welcome to the UBC Rapid Printing Service for the 2023/2024 academic year!</h1>
                <p><strong>This service is exclusively available to groups and organizations affiliated with the University of British Columbia (UBC)</strong>. If you fall under any of the following categories, you are eligible to complete this form:</p>
                <p>
                    <ul className='list'>
                        <li>UBC research teams</li>
                        <li>UBC design teams</li>
                        <li>UBC-affiliated organizations</li>
                    </ul>
                </p>
                <p>Please note that in order to use this service, you must have access to a UBC bank account and internal journal vouchers, as we do not accept cash or e-transfers as payment methods.</p>

                <p>Unfortunately, we are unable to fulfill requests for personal (non-UBC affiliated) or commercial purposes. If you are uncertain about your eligibility, please reach out to us at <a href="mailto:internal.ubcrapid@gmail.com">internal.ubcrapid@gmail.com</a> or through our Instagram page <a href="https://www.instagram.com/ubc_rapid">@ubc_rapid</a>.</p>
                <h3>General Information:</h3>
                <p>The preferred file format for 3D models is .STL, although we can accommodate other CAD file types if necessary.</p>

                <p>Our pricing model is designed for cost recuperation and is based on the amount of material used and the type of material. You can expect to receive a quote via email after our team reviews your model. Please note that we do not accept rush orders or high-resolution requests.</p>

                <p>For inquiries, anticipate an email response within 2-3 business days. For any further questions or concerns, you can contact us at <a href="mailto:internal.ubcrapid@gmail.com">internal.ubcrapid@gmail.com</a>.</p>

                <p>*If you do not have a 3D model ready, you can fill out a consulting 
                    form instead. Our support team will be there to guide you.*
                </p>

                <br></br>

                <h3>1. CONFIGURE YOUR PRINT SIZE</h3>
                <p>UBC Rapid’s printers can print objects that can be contained within 
                    a <strong>250mm x 210mm x 200mm box (LxWxH)</strong> (with some exceptions). If multiple individual objects 
                    fit on the single 200mm x 200mm print bed, it will be considered a 
                    single print. Objects larger than this size will need to be split up before printing.
                </p>
                <br /><br />
                <h3>2. CHOOSE A PRINT RESOLUTION</h3>
                <p>Higher resolution means higher surface quality and details, but longer print time.
                </p>
                <center><img src="/images/print-resolution.jpg" alt=""></img></center>
                <br /><br />
                <h3>3. CHOOSE A FILAMENT</h3>
                <p>We recommend PLA because it is low cost and easy to work with. 
                    More exotic materials, like Nylon and PETT, are only available 
                    by special request. The prices for filament will be disclosed in our response to your request
                </p>
                <center><table>
                    <thead>
                    <tr>
                        <th>Thermoplastic</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="https://reprap.org/wiki/PLA" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PLA (recommended)</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://reprap.org/wiki/PETG" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PETG</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://reprap.org/wiki/ABS" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            ABS</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/pages/search-results-page?q=pett" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PETT</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://reprap.org/wiki/Polyamide" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Nylon</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://reprap.org/wiki/Polycarbonate" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PolyCarbonate	</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/pages/search-results-page?q=copolyester" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Copolyester</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/products/moldlay-filament-1-75mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Moldlay</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/search?options%5Bunavailable_products%5D=show&options%5Bprefix%5D=last&q=rubber+tpu" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Rubber UglyFlex TPU</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/search?options%5Bunavailable_products%5D=show&options%5Bprefix%5D=last&q=tpe" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            TPE</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/collections/1-75mm-3d-filaments/products/easywood-filament-birch-1-75mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Wood Filament - Birch</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/products/easycork-cork-filament-2-85mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Wood Filament - Cork</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/products/esun-esilk-pla-filament-silk-copper-1-75mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Wood Filament - Silk Copper</a></td>
                    </tr>
                    </tbody>
                </table></center>
                <br /><br />
                <h3>4. SPECIFY AN INFILL DENSITY</h3>
                <p>Higher density means more material and higher cost.
                </p>
                <br /><br />
                <h3>5. CHOOSE A COLOUR</h3>
                <p>We have a limited amount of colours available. Please contact us if you would 
                    like a specific colour and we will accommodate depending on our availability of materials.
                </p>
                <center><img src="/images/print-colours.jpg" alt=""></img></center>
                <h3>6. SPECIFY REQUIREMENTS</h3>
                <p>Additional fees may apply for special requests such as surface smoothing, 
                    post-print processing, support removal, etc. Please contact us at the 
                    link below for more details.
                </p>
                <br /><br />
                <h3>7. FILL OUT OUR ORDER FORM</h3>
                <p>If you have an .STL file available and ready, please fill out our 
                    order form. You should receive a quote for your print within 48 hours. 
                    Otherwise, if you don’t have an .STL file or don’t know what to print, 
                    fill out a consulting form. Our support team will be there to guide you.
                </p>
                <br /><br />
                <h3>8. CONFIRMATION AND PAYMENT</h3>
                <p>You should receive a quote for your print within 48 hours after 
                    filling out an order. When you decide to proceed, we will accept payment through the UBC system. 
                    WE DO NOT ACCEPT ETRANSFERS OR CASH!
                </p>
                <br /><br />
                <h3>9. PICK UP</h3>
                <p>Once we have your payment, your print should be ready for 
                    pick up within 1~2 business weeks. More complex prints may 
                    take more time. One of our Rapid members will contact 
                    you when your print is ready to arrange a time and place. 
                    Delivery may be arranged for additional charge.
                </p>
                <br /><br />
                <div className="info-btns-printing">
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    newTab='true'
                    link='https://docs.google.com/forms/d/e/1FAIpQLScIMaVpJjbdIXxE7A0Sd8At-2BUc01VNrAgqs3v7iykWImMUA/viewform'
                >
                    Order Now
                </Button>
                <br /><br />
                </div>
            </div>
        </>
    );
}
