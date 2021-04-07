import React from "react"

export default function ProfileMessage() {
    return (
        <>
            <div id="messages" class="tab-pane fade in active">
                <div class="inbox-body inbox-widget">
                    <div class="mail-card">
                        <header class="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="#full-message" aria-expanded="false">
                            <div class="card-title flexbox">
                                <img class="img-responsive img-circle avatar" src="assets/img/can-1.png" alt="..." />
                                <div>
                                    <h6>Daniel Duke</h6>
                                    <small>Today at 07:34 AM</small>
                                    <small><a class="text-info collapsed" href="#detail-view" data-toggle="collapse" aria-expanded="false">View Detail</a></small>

                                    <div class="no-collapsing cursor-text collapse" id="detail-view" aria-expanded="false" style={{ height: 0 + 'px' }}>
                                        <small class="d-inline-block">From:</small>
                                        <small>theadmin@thetheme.io</small>
                                        <br />
                                        <small class="d-inline-block">To:</small>
                                        <small>subscriber@yahoo.com</small>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="collapse" id="full-message" aria-expanded="false" style={{ height: 0 + 'px' }}>
                            <div class="card-body">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mail-card unread">
                        <header class="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="#meaages-2" aria-expanded="false">
                            <div class="card-title flexbox">
                                <img class="img-responsive img-circle avatar" src="assets/img/can-2.png" alt="..." />
                                <div>
                                    <h6>Daniel Duke</h6>
                                    <small>Today at 07:34 AM</small>
                                    <small><a class="text-info collapsed" href="#detail-view1" data-toggle="collapse" aria-expanded="false">View Detail</a></small>

                                    <div class="no-collapsing cursor-text collapse" id="detail-view1" aria-expanded="false" style={{ height: 0 + 'px' }}>
                                        <small class="d-inline-block">From:</small>
                                        <small>theadmin@thetheme.io</small>
                                        <br />
                                        <small class="d-inline-block">To:</small>
                                        <small>subscriber@yahoo.com</small>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="collapse" id="meaages-2" aria-expanded="false" style={{ height: 0 + 'px' }}>
                            <div class="card-body">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mail-card">
                        <header class="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="#meaages-3" aria-expanded="false">
                            <div class="card-title flexbox">
                                <img class="img-responsive img-circle avatar" src="assets/img/can-1.png" alt="..." />
                                <div>
                                    <h6>Daniel Duke</h6>
                                    <small>Today at 07:34 AM</small>
                                    <small><a class="text-info collapsed" href="#detail-view2" data-toggle="collapse" aria-expanded="false">View Detail</a></small>

                                    <div class="no-collapsing cursor-text collapse" id="detail-view2" aria-expanded="false" style={{ height: 0 + 'px' }}>
                                        <small class="d-inline-block">From:</small>
                                        <small>theadmin@thetheme.io</small>
                                        <br />
                                        <small class="d-inline-block">To:</small>
                                        <small>subscriber@yahoo.com</small>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="collapse" id="meaages-3" aria-expanded="false" style={{ height: 0 + 'px' }}>
                            <div class="card-body">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mail-card">
                        <header class="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="#meaages-4" aria-expanded="false">
                            <div class="card-title flexbox">
                                <img class="img-responsive img-circle avatar" src="assets/img/can-3.png" alt="..." />
                                <div>
                                    <h6>Daniel Duke</h6>
                                    <small>Today at 07:34 AM</small>
                                    <small><a class="text-info collapsed" href="#detail-view3" data-toggle="collapse" aria-expanded="false">View Detail</a></small>

                                    <div class="no-collapsing cursor-text collapse" id="detail-view3" aria-expanded="false" style={{ height: 0 + 'px' }}>
                                        <small class="d-inline-block">From:</small>
                                        <small>theadmin@thetheme.io</small>
                                        <br />
                                        <small class="d-inline-block">To:</small>
                                        <small>subscriber@yahoo.com</small>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="collapse" id="meaages-4" aria-expanded="false" style={{ height: 0 + 'px' }}>
                            <div class="card-body">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mail-card unread">
                        <header class="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="meaages-5" aria-expanded="false">
                            <div class="card-title flexbox">
                                <img class="img-responsive img-circle avatar" src="assets/img/can-4.png" alt="..." />
                                <div>
                                    <h6>Daniel Duke</h6>
                                    <small>Today at 07:34 AM</small>
                                    <small><a class="text-info collapsed" href="#detail-view4" data-toggle="collapse" aria-expanded="false">View Detail</a></small>

                                    <div class="no-collapsing cursor-text collapse" id="detail-view4" aria-expanded="false" style={{ height: 0 + 'px' }}>
                                        <small class="d-inline-block">From:</small>
                                        <small>theadmin@thetheme.io</small>
                                        <br />
                                        <small class="d-inline-block">To:</small>
                                        <small>subscriber@yahoo.com</small>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="collapse" id="meaages-5" aria-expanded="false" style={{ height: 0 + 'px' }}>
                            <div class="card-body">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mail-card">
                        <header class="card-header cursor-pointer">
                            <div class="card-title flexbox">
                                <img class="img-responsive img-circle avatar" src="assets/img/can-4.png" alt="..." />
                                <div>
                                    <h6>Daniel Duke</h6>
                                    <small>Today at 07:34 AM</small>
                                    <small><a class="text-info collapsed" href="#detail-view-6" data-toggle="collapse" aria-expanded="false">View Detail</a></small>

                                    <div class="no-collapsing cursor-text collapse" id="detail-view-6" aria-expanded="false" style={{ height: 0 + 'px' }}>
                                        <small class="d-inline-block">From:</small>
                                        <small>theadmin@thetheme.io</small>
                                        <br />
                                        <small class="d-inline-block">To:</small>
                                        <small>subscriber@yahoo.com</small>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="" id="meaages-6">
                            <div class="card-body">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
                                <hr />
                                <h5 class="text-lighter">
                                    <i class="fa fa-paperclip"></i>
                                    <small>Attchments (3)</small>
                                </h5>
                                <div class="attachment-block">
                                    <div class="thumb">
                                        <img src="assets/img/gallery1.jpg" alt="img" class="img-responsive" />
                                    </div>
                                    <div class="attachment-info">
                                        <h6>Profile Pic  <span>( 1.69 mb )</span></h6>
                                        <ul>
                                            <li><a href="javascript:void(0)">Download</a></li>
                                            <li><a href="javascript:void(0)">View</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="attachment-block">
                                    <div class="thumb">
                                        <img src="assets/img/gallery2.jpg" alt="img" class="img-responsive" />
                                    </div>
                                    <div class="attachment-info">
                                        <h6>Profile Pic  <span>( 1.69 mb )</span></h6>
                                        <ul>
                                            <li><a href="javascript:void(0)">Download</a></li>
                                            <li><a href="javascript:void(0)">View</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="attachment-block">
                                    <div class="thumb">
                                        <img src="assets/img/gallery3.jpg" alt="img" class="img-responsive" />
                                    </div>
                                    <div class="attachment-info">
                                        <h6>Profile Pic  <span>( 1.69 mb )</span></h6>
                                        <ul>
                                            <li><a href="javascript:void(0)">Download</a></li>
                                            <li><a href="javascript:void(0)">View</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
