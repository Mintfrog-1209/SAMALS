package com.project.samals.repository;

import com.project.samals.domain.Nft;
import com.project.samals.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface NftRepository extends JpaRepository<Nft, Long> {
    Optional<Nft> findByTokenId(int tokenId);
    void deleteByNftSeq(Long nftSeq);

    List<Nft> findAllByNftOwner(String address);

    List<Nft> findByNftType(String donate);

    List<Nft> findByNftTypeAndUser(String donate, User user);

    List<Nft> findAllByNftType(String donate);
}
