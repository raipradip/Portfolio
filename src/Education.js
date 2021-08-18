const Education = () => {
    return ( 
        <div id="education" className="mt-3 mb-4">
            <div className="card text-white bg-primary">
                <h5 className="card-header text-center">Education</h5>
                <div className="card-body ">
                    <div class="list-group">
                        <div className="list-group-item list-group-item-action " aria-current="true">
                            <div className="d-flex w-100 justify-content-between ">
                            <h5 className="mb-1">Bachelor's in IT Engineering</h5>
                            <small className="">2020</small>
                            </div>
                            <p className="mb-1">Nepal College of Information Technology(NCIT)</p>
                            <p className="mb-1">SGPA: N/A</p>
                            <small>Balkumari, Lalitpur</small>
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">High School</h5>
                            <small>2016</small>
                            </div>
                            <p className="mb-1">Trinity International HS School</p>
                            <p className="mb-1">+2 Percentage: 67.40%</p>
                            <small>Dillibazar, Kathmandu</small>
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">School Leaving Certificate</h5>
                            <small>2014</small>
                            </div>
                            <p className="mb-1">Babylon National School</p>
                            <p className="mb-1">SLC Percentage = 81.36%</p>
                            <small>Shantinagar, Kathmandu</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Education;