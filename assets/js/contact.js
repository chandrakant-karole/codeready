const contact = document.getElementById('contactFormCust');

contact.innerHTML = `		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal_width">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title m-0" id="exampleModalLabel"><strong>View For Demo And Contact</strong></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-lg-6">
                    <img class="img-fluid" src="assets/images/bitaski-clone/coder.png" alt="">
                </div>
                <div class="col-lg-6">

                    <form action="http://localhost:5000/codeready_send_mail" method="post">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="inputName4" class="form-label">Name</label>
                                <input type="text" class="form-control" id="inputName4" name="inputName4">
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" name="inputEmail4" required>
                            </div>
                            <div class="col-md-12">
                                <label for="inputPhone4" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="inputPhone4" name="inputPhone4">
                            </div>
                            <div class="col-md-12">
                                <label for="inputSubject4" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="inputSubject4" name="inputSubject4">
                            </div>
                            <div class="col-md-12">
                                <label for="inputMessage4" class="form-label">Message</label>
                                <textarea class="form-control" id="inputMessage4" name="inputMessage4"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`;