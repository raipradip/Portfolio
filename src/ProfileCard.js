const ProfileCard = () => {
    return ( 
        <div class="row mt-3">
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body text-center">
                    <img src='/img/personal.jpg' alt="" width="80%" className="img-fluid rounded"/>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h6>HELLO EVERYBODY, I AM</h6>
                    <b><h2>PRADIP RAI</h2></b>
                    <h3>WEB DEVELOPER/ APP DEVELOPER</h3>
                    <p>I am a programming enthusiastic. Learning new programming language is like having a super power.</p>
                    <p><i class="fas fa-calendar-alt"></i> 4th September, 1998</p>
                    <p><i class="fas fa-calendar-day"></i> 19th Bhadra, 2055</p>
                    <p><i class="fas fa-phone"></i> N/A</p>
                    <p><i class="fas fa-envelope"></i> bayungraipradip@gmail.com</p>
                    <p><i class="fas fa-home"></i> Mulpani Chaur, Mulpani</p>
                    <div className="social mb-2">
                        <a href="https://www.facebook.com/pradip.bayung.rai/" target="_blank" rel="noreferrer"><i class="fab fa-facebook fa-lg"></i></a> &nbsp;
                        <a href="https://github.com/raipradip" target="_blank" rel="noreferrer"><i class="fab fa-github fa-lg"></i></a> &nbsp;
                        <a href="https://www.instagram.com/pradip_bayung/" target="_blank" rel="noreferrer"><i class="fab fa-instagram fa-lg"></i></a>

                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProfileCard;