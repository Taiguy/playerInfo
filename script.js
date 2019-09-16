var search_base_url =
  "https://api-v3.royaleapi.com/player/#";
  var token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA0NSwiaWRlbiI6IjI5OTc1MzkxODEyMzA4MTcyOCIsIm1kIjp7InVzZXJuYW1lIjoiIiwiZGlzY3JpbWluYXRvciI6IiIsImtleVZlcnNpb24iOjB9LCJ0cyI6MTU2ODU5MzAxMzY5MH0.mJHYx-vgJJeY98qFKNPbjWV-nud-PQBCn6JJQpMcTmk";

function getSearchUrl(tag) {
    return search_base_url + tag;
}

function getPlayer(tag) {
    let myurl = getSearchUrl(tag);
    console.log("searchURL: " + myurl);

    $.ajax({
        method: "GET",
        url: myurl,
        dataType: "json",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token
        },
        success: function(data) {
          console.log("success");
        }
    });
}
