package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/places")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PlaceResource {

    @GET
    public List<Place> getPlaces() {
        return Place.listAll();
    }

    @POST
    @Transactional
    public Response addPlace(Place place) {
        place.persist();
        return Response.status(Response.Status.CREATED).entity(place).build();
    }

    @PUT
    @Path("/{id}")
    @Transactional
    public Response updatePlace(@PathParam("id") Long id, Place updatedPlace) {
        Place place = Place.findById(id);
        if (place == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        place.name = updatedPlace.name;
        place.location = updatedPlace.location;
        place.description = updatedPlace.description;
        place.image = updatedPlace.image;
        return Response.ok(place).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public Response deletePlace(@PathParam("id") Long id) {
        boolean deleted = Place.deleteById(id);
        if (!deleted) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.noContent().build();
    }
}