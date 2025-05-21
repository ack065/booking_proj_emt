//package mk.ukim.finki.emt.lab.Config;
//
//import jakarta.annotation.PostConstruct;
//import mk.ukim.finki.emt.lab.Repository.AccommodationsByHostRepository;
//import mk.ukim.finki.emt.lab.Repository.HostsByCountryRepository;
//import org.springframework.stereotype.Component;
//
//
//@Component
//public class MaterializedViewRefresher {
//    private final AccommodationsByHostRepository accommodationsByHostRepository;
//    private final HostsByCountryRepository hostsByCountryRepository;
//
//    public MaterializedViewRefresher(AccommodationsByHostRepository accommodationsByHostRepository, HostsByCountryRepository hostsByCountryRepository) {
//        this.accommodationsByHostRepository = accommodationsByHostRepository;
//        this.hostsByCountryRepository = hostsByCountryRepository;
//    }
//
//
//    @PostConstruct
//    public void init() {
//        accommodationsByHostRepository.refreshMaterializedView();
//        hostsByCountryRepository.refreshMaterializedView();
//    }
//}