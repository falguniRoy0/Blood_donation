$("#locationEditModal").on("show.bs.modal", function (e) {
  let locationId = $(e.relatedTarget).data("location-id");
  let locationName = $(e.relatedTarget).data("location-name");
  let companyCode = $(e.relatedTarget).data("location-company-code");

  $(e.currentTarget).find('input[name="locationId"]').val(locationId);
  $(e.currentTarget).find('input[name="name"]').val(locationName);
  $(e.currentTarget).find('input[name="companyCode"]').val(companyCode);

  $(e.currentTarget).find('input[value="locationId"]').val(locationId);
  $(e.currentTarget).find('input[value="name"]').val(locationName);
  var modal = $(this);
  modal.find(".modal-body #company-code").val(companyCode);
});
