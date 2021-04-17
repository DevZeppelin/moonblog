import FacebookSvg from './icons/social/FacebookSvg';
import LinkedinSvg from './icons/social/LinkedinSvg';
import TwitterSvg from './icons/social/TwitterSvg';
import WhatsappSvg from './icons/social/WhatsappSvg';

const SocialSidebar = () => 
{
    return (
        <div className="hidden lg:flex flex-col justify-start mt-16 ml-4 mr-16">
        <div className=" space-y-2">
          <div>
            <a href="/" target="_blank" className="cursor-pointer">
              <FacebookSvg className="h-10 w-10" />
            </a>
          </div>
          <div>
            <a href="/" target="_blank" className="cursor-pointer">
              <TwitterSvg className="h-10 w-10" />
            </a>
          </div>
          <div>
            <a href="/" target="_blank" className="cursor-pointer">
              <WhatsappSvg className="h-10 w-10" />
            </a>
          </div>
          <div>
            <a href="/" target="_blank" className="cursor-pointer">
              <LinkedinSvg className="h-10 w-10" />
            </a>
          </div>
        </div>
        <div className="h-10" />
        <div className="space-y-3 flex flex-col items-center ">
          <div className="h-4 w-4 rounded-full bg-mywhite" />
          <div className="h-3 w-3 rounded-full bg-mywhite" />
          <div className="h-2 w-2 rounded-full bg-mywhite" />
          <div className="h-1 w-1 rounded-full bg-mywhite" />
        </div>
      </div>
        )
}

export default SocialSidebar;