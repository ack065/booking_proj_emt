package mk.ukim.finki.emt.lab.Model.projections;

public interface UserProjection {
    String getName();
    String getUsername();

    default String getFullName() {
        return getName() + " " + getUsername();
    }
}
