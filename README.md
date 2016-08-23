# bootstrap-dynatabs
this pluggin allows creating dynamic tabs with jquery and boostrap


Here an example to enable dynamic tab


<html>
<body>
 <div class="wrapper wrapper-content animated fadeIn">
      <div class="tabs-container" id="tabs">

          <div class="tabs-left">
              <ul class="nav nav-tabs">
                  <li class="active"><a data-toggle="tab" href="#tab-6"> This is tab</a></li>
                  <li class=""><a data-toggle="tab" href="#tab-7">This is second tab</a></li>
              </ul>
              <div class="tab-content ">
                  <div id="tab-6" class="tab-pane active">
                      <div class="panel-body">
                          <strong>Lorem ipsum dolor sit amet, consectetuer adipiscing</strong>

                          <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of
                              existence in this spot, which was created for the bliss of souls like mine.</p>

                          <p>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at
                              the present moment; and yet I feel that I never was a greater artist than now. When.</p>
                      </div>
                  </div>
                  <div id="tab-7" class="tab-pane">
                      <div class="panel-body">
                          <strong>Donec quam felis</strong>

                          <p>Thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects
                              and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath </p>

                          <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite
                              sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet.</p>
                      </div>
                  </div>
              </div>

          </div>

      </div>
  </div>
</body>
</html>

$('#tabs').dynatabs();
